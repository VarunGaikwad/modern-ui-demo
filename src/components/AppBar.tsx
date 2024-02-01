import Logo from "../assets/logo.svg";
import GitHub from "../assets/github.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import IconButton from "./IconButton";

export default function AppBar() {
  return (
    <div className="w-full flex justify-between px-20 py-4 border-b-2">
      <img src={Logo} width={64} />
      <div className="flex justify-between items-center">
        <IconButton url="https://github.com/VarunGaikwad" icon={GitHub} />
        <IconButton
          url="https://www.facebook.com/gaikwadvarun23"
          icon={Facebook}
        />
        <IconButton
          url="https://www.linkedin.com/in/varun-gaikwad/"
          icon={LinkedIn}
        />
      </div>
    </div>
  );
}
