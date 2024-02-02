import Button from "../components/Button";
import axios from "axios";
import { baseUrl, globalModel } from "../global/globalData";
import { useState } from "react";
import Toast, { varientType } from "../components/Toast";



export default function Home() {
  const [varient, setVarient] = useState<varientType>("success"),
    [showToast, setShowToast] = useState(false),
    [message, setMessage] = useState<string>(""),
    [taskName, setTaskName] = useState(globalModel?.task_name || ""),
    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTaskName(event.target.value);
    },
    onShowMessageToast = (toastMessage: string, toastVarient: varientType) => {
      setShowToast(true);
      setMessage(toastMessage);
      setVarient(toastVarient);

      setTimeout(() => {
        setShowToast(false);
        setMessage("");
        setVarient("success");
      }, 3000);
    },
    onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const response = await axios.post(`${baseUrl}/odata/v4/todo/MyTask`, {
          task_name: taskName,
          has_completed: false,
          due_date: new Date().toDateString(),
          assign_to: "ME",
        });
        onShowMessageToast(JSON.stringify(response.data), "success");
      } catch (e) {
        let error = e as Error;
        onShowMessageToast(JSON.stringify(error.message), "error");
      }
    };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={taskName}
          onChange={onInputChange}
          name="task_name"
          className="p-2 focus:outline-none"
        />
        <Button type="submit" text="Submit" />
      </form>
      <Toast
        message={message}
        showToast={showToast}
        varient={varient}
        onClose={() => {
          setShowToast(false);
        }}
      />
    </div>
  );
}
