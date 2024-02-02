import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation(),
    [pathName, setPathName] = useState(pathname),
    menu = [
      {
        text: "My Home",
        path: "/",
        key: "101",
      },
      {
        text: "History",
        path: "/History",
        key: "102",
      },
    ];

  return (
    <div>
      {menu.map(({ text, path, key }) => (
        <Link onClick={() => setPathName(path || "/")} key={key} to={path}>
          <p
            className={`${
              pathName === path ? "font-bold " : ""
            }text-center my-4`}
          >
            {text}
          </p>
        </Link>
      ))}
    </div>
  );
}
