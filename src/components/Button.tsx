type ButtonProp = {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
};

export default function Button({ text, type }: ButtonProp) {
  return (
    <button type={type} className="rounded-full p-2 mx-2 hover:bg-orange-200">
      {text}
    </button>
  );
}
