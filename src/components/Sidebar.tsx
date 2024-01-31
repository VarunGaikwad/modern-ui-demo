export default function Sidebar() {
  const menu = [
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
    "My Home",
    "My View",
    "Compenent",
  ];
  return (
    <div className="">
      {menu.map((item) => (
        <div className="text-center my-4">{item}</div>
      ))}
    </div>
  );
}
