const isDev = window.location.href.includes("localhost"),
  baseUrl = isDev ? "http://localhost:4004" : "",
  globalModel: Record<string, string> = {
    task_name: "",
  };

export interface TaskItemType {
  ID: string;
  assign_to: string;
  due_date: Date;
  has_completed: boolean;
  task_name: string;
}

export { baseUrl, globalModel };
