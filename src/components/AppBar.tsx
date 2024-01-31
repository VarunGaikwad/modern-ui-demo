import Chakra from "../assets/chakra.svg";
import GitHub from "../assets/github.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import IconButton from "./IconButton";

export default function AppBar() {
  return (
    <div className="fixed top-0 w-full flex justify-between px-10 py-4 border-b-2">
      <div>
        <img src={Chakra} width={125} />
      </div>
      <div className="flex justify-between">
        <IconButton icon={GitHub} />
        <IconButton icon={Facebook} />
        <IconButton icon={LinkedIn} />
      </div>
    </div>
  );
}
