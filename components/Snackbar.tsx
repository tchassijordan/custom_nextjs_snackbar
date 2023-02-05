import { TSnackbarProps } from "./types";

export default function Snackbar({
  text,
  icon: Icon,
  handleClose,
  variant,
}: TSnackbarProps) {
  const variants = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div className="absolute left-4 bottom-4 ">
      <div
        className={`${variants[variant]} flex min-w-[300px] items-center truncate whitespace-nowrap rounded-lg py-3 px-3.5 text-xs text-white shadow-md`}
      >
        {Icon && (
          <span className="mr-4 text-base" aria-hidden="true">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <span>{text}</span>
        <button
          className="ml-auto bg-transparent !p-0 text-current underline"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
