import AppBody from "./AppBody";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <AppBody />
    </div>
  );
}
