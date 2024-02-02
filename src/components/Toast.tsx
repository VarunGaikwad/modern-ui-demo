export type varientType = "success" | "error" | "warning";
export type ToastType = {
  message: string;
  showToast: boolean;
  onClose: () => void;
  varient?: varientType;
};

export default function Toast({
  message,
  showToast,
  onClose,
  varient = "success",
}: ToastType) {
  return (
    <div
      className={`fixed bottom-0 right-0 p-4 m-4 bg-${varient} text-white rounded-md ${
        showToast ? "visible" : "invisible"
      }`}
    >
      <p>{message}</p>
      <button onClick={onClose} className="text-white ml-2 focus:outline-none">
        Close
      </button>
    </div>
  );
}
