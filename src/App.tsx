export default function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/5 bg-blue-950 sm:w-50 flex flex-col justify-between">
        {/* Header */}
        <div className="p-4">
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
            LG
          </div>
        </div>
        {/* List */}
        <div>List</div>
        {/* Footer */}
        <div>Footer</div>
      </div>
      <div className="w-4/5">Main Content</div>
    </div>
  );
}
