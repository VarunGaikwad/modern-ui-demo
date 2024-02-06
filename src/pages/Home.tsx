import Button from "../components/Button";
import axios from "axios";
import { TaskItemType, baseUrl, globalModel } from "../global/globalData";
import { useEffect, useState } from "react";
import MessageBox, {
  MessageBoxType,
  MessageBoxWithoutClose,
} from "../components/MessageBox";

export default function Home() {
  const [taskItem, setTaskItem] = useState<TaskItemType[]>([]),
    [messageBoxData, setMessageBoxData] = useState<MessageBoxType | null>(null),
    [taskName, setTaskName] = useState(globalModel?.task_name || ""),
    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTaskName(event.target.value);
    },
    onOpenMessageBox = ({
      title,
      description,
      type,
    }: MessageBoxWithoutClose) => {
      setMessageBoxData({
        title: title,
        description: description,
        type: type,
        onClose: () => {
          setMessageBoxData(null);
        },
      });
    },
    onListDelete = () => {},
    onFetchItem = async () => {
      const { data } = await axios.get(`${baseUrl}/odata/v4/todo/MyTask`),
        { value } = data;
      setTaskItem(value);
    },
    onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!taskName) {
        onOpenMessageBox({
          title: "Warning",
          description: "Input field is blank.",
          type: "warning",
        });

        return;
      }

      try {
        const response = await axios.post(`${baseUrl}/odata/v4/todo/MyTask`, {
          task_name: taskName,
          has_completed: false,
          due_date: new Date(new Date().setDate(new Date().getDate() + 10))
            .toISOString()
            .slice(0, 10),
          assign_to: "ME",
        });

        onOpenMessageBox({
          title: "Success",
          description: response.statusText,
          type: "success",
        });
      } catch (_error) {
        const error = _error as Error;

        onOpenMessageBox({
          title: "Error",
          description: error.message,
          type: "error",
        });
      } finally {
        setTaskName("");
      }
    };

  useEffect(() => {
    onFetchItem();
  }, []);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            value={taskName}
            id="task_name"
            name="task_name"
            onChange={onInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 flex-grow-0"
            placeholder="Your Task"
          />
          <Button type="submit" text="Submit" />
        </div>
      </form>

      <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-2">My Task</h2>
        <ul className="max-h-80 overflow-y-auto">
          {taskItem.map((item) => (
            <li className="flex items-center justify-between bg-gray-200 p-4 mb-4 rounded">
              <span>{item.task_name}</span>
              <span className="flex justify-between w-1/5">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={onListDelete}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={onListDelete}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {messageBoxData && (
        <MessageBox
          type={messageBoxData.type}
          title={messageBoxData.title}
          description={messageBoxData.description}
          onClose={messageBoxData.onClose}
        />
      )}
    </div>
  );
}
