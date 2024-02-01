import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function AppBody() {
  return (
    <div className="flex h-screen">
      <aside className="w-48 overflow-y-auto border-r-2">
        <Sidebar />
      </aside>
      <main className="flex-grow overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
