import Success from "../assets/check-circle.svg";
import Warning from "../assets/alert-triangle.svg";
import Error from "../assets/alert-circle.svg";
import { ReactElement } from "react";
import IconButton from "./IconButton";
import CloseIcon from "../assets/x.svg";

export interface MessageBoxType {
  type: string;
  title: string;
  description: string;
  onClose: () => void;
}

export default function MessageBox({
  type,
  title,
  description,
  onClose,
}: MessageBoxType) {
  const boxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
  };

  let backgroundColor: string, icon: ReactElement | null;
  switch (type) {
    case "success":
      backgroundColor = "green";
      icon = <img width={25} src={Success} />;
      break;
    case "warning":
      backgroundColor = "orange";
      icon = <img width={25} src={Warning} />;
      break;
    case "error":
      backgroundColor = "red";
      icon = <img width={25} src={Error} />;
      break;
    default:
      backgroundColor = "gray";
      icon = null;
  }

  return (
    <div className="fixed top-0 right-0">
      <div
        className={`flex items-center justify-center border-r-8 mx-10 text-white`}
      >
        {icon && <div className="mr-2">{icon}</div>}
        <div>
          <div className="font-bold">{title}</div>
          <div>{description}</div>
        </div>
        <button
          onClick={onClose}
          className="ml-2 bg-transparent border-none cursor-pointer"
        >
          <IconButton icon={CloseIcon} />
        </button>
      </div>
    </div>
  );
}
