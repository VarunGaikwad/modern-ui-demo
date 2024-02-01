const isDev = window.location.href.includes("localhost"),
  baseUrl = isDev ? "http://localhost:4004" : "",
  globalModel: Record<string, unknown> = {
    task_payload: {},
  },
  getProperty = (key: string): unknown => globalModel[key],
  setProperty = (key: string, value: unknown) => {
    globalModel[key] = value;
  };

export { baseUrl, getProperty, setProperty };
