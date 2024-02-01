import { useEffect } from "react";
import AppBody from "./AppBody";
import AppBar from "./components/AppBar";

export default function App() {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");

    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = "src/assets/logo.svg";

    document.head.appendChild(link);
    document.title = "My Todo";

    return () => {
      document.title = "My Todo";
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-orange-300">
      <AppBar />
      <AppBody />
    </div>
  );
}
