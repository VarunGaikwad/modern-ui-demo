import Sidebar from "./components/Sidebar";

export default function AppBody() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="flex-4">Main Content</div>
    </div>
  );
}
