type IconButtonProp = {
  icon: string;
};

export default function IconButton({ icon }: IconButtonProp) {
  return (
    <button className="rounded-full p-1 bg-gray-100 mx-2 hover:bg-slate-300">
      <img src={icon} />
    </button>
  );
}
