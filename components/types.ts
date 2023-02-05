export type SnackbarType = {
  key: string; // snackbar identifier
  text: React.ReactNode; //  text to show within snackbar
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; // snackbar icon
  variant: "success" | "error" | "warning" | "info"; // snackbar variant
};

export type TSnackbarProps = Omit<SnackbarType, "key"> & {
  handleClose: () => void; // Function that is run when the snackbar is closed
  className?: string; // Additional class names to add to the snackbar
};
