type IconButtonProp = {
  icon: string;
  url?: string;
  onClick?: () => void;
};

export default function IconButton({
  onClick,
  icon,
  url = "",
}: IconButtonProp) {
  const routeWithLink = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={onClick || routeWithLink}
      className="rounded-full p-2 mx-2 hover:bg-orange-200"
    >
      <img width={25} src={icon} />
    </button>
  );
}
