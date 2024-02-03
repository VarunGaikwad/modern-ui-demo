type ButtonProp = {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
};

export default function Button({ text, type }: ButtonProp) {
  return (
    <button
      type={type}
      className="ml-2 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
    >
      {text}
    </button>
  );
}
