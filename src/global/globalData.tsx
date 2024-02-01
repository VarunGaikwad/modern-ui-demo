const isDev = window.location.href.includes("localhost"),
  baseUrl = isDev ? "http://localhost:4004" : "";

export { baseUrl };
