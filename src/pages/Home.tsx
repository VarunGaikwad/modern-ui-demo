import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { baseUrl } from "../global/globalData";

export default function Home() {
  const [payload, setPayload] = useState({}),
    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPayload((oldPayload) => ({
        ...oldPayload,
        task_name: event.target.value,
      }));
    },
    onFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const response = await axios.post(`${baseUrl}/odata/v4/todo/MyTask`, {
          ...payload,
          has_completed: false,
          due_date: new Date().toISOString().split("T")[0],
          assign_to: "Me",
        });

        console.log("Response from the server:", response.data);
      } catch (error) {
        console.error("Error making POST request:", error);
      }
    };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onInputChange}
          name="task_name"
          className="p-2 focus:outline-none"
        />
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
}
