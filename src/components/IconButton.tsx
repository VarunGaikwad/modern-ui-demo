type IconButtonProp = {
  icon: string;
  url?: string;
};

export default function IconButton({ icon, url = "" }: IconButtonProp) {
  const routeWithLink = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={routeWithLink}
      className="rounded-full p-2 mx-2 hover:bg-orange-200"
    >
      <img width={25} src={icon} />
    </button>
  );
}
