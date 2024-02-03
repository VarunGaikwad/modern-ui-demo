import Button from "../components/Button";
import axios from "axios";
import { baseUrl, globalModel } from "../global/globalData";
import { useState } from "react";
import MessageBox, { MessageBoxType } from "../components/MessageBox";

export default function Home() {
  const [messageBoxData, setMessageBoxData] = useState<MessageBoxType | null>(
      null
    ),
    [taskName, setTaskName] = useState(globalModel?.task_name || ""),
    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTaskName(event.target.value);
    },
    onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!taskName) {
        setMessageBoxData({
          title: "Warning",
          description: "Input field is blank.",
          type: "warning",
          onClose: () => setMessageBoxData(null),
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

        setMessageBoxData({
          title: "Success",
          description: response.statusText,
          type: "success",
          onClose: () => setMessageBoxData(null),
        });
      } catch (_error) {
        const error = _error as Error;
        setMessageBoxData({
          title: "Error",
          description: error.message,
          type: "error",
          onClose: () => setMessageBoxData(null),
        });
      }
    };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            id="task_name"
            name="task_name"
            onChange={onInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 flex-grow-0"
            placeholder="Your Task"
          />
          <Button type="submit" text="Submit" />
        </div>
      </form>

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
