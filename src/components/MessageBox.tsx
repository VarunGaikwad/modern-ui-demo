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

export interface MessageBoxWithoutClose
  extends Omit<MessageBoxType, "onClose"> {}

export default function MessageBox({
  type,
  title,
  description,
  onClose,
}: MessageBoxType) {
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
    <div className="fixed top-0 right-0 m-2">
      <div
        style={{ backgroundColor }}
        className="flex items-center justify-center text-white p-2 rounded-2xl"
      >
        {icon && <div className="ml-2 mr-4">{icon}</div>}
        <div>
          <div className="font-bold">{title}</div>
          <div>{description}</div>
        </div>
        <button className="ml-10 bg-transparent border-none cursor-pointer">
          <IconButton onClick={onClose} icon={CloseIcon} />
        </button>
      </div>
    </div>
  );
}
