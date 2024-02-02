const isDev = window.location.href.includes("localhost"),
  baseUrl = isDev ? "http://localhost:4004" : "",
  globalModel: Record<string, string> = {
    task_name: "",
  };

export { baseUrl, globalModel };
