import Snackbar from "@/components/Snackbar";
import { SnackbarType } from "@/components/types";
import { createContext, useReducer, useContext, useCallback } from "react";
import { TAction } from "../utils/reducer";
import reducer from "../utils/reducer";

const SnackbarContext = createContext<{
  queue: SnackbarType[];
  dispatch: React.Dispatch<TAction>;
}>({
  queue: [] as SnackbarType[],
  dispatch: () => {},
});

export default function SnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ queue }, dispatch] = useReducer(reducer, { queue: [] });

  return (
    <SnackbarContext.Provider value={{ queue, dispatch }}>
      <div className="relative">
        {queue.map((snack, index) => (
          <Snackbar
            key={snack.key}
            text={snack.text}
            variant={snack.variant}
            icon={snack.icon}
            handleClose={() =>
              dispatch({ type: "REMOVE_SNACKBAR", payload: { key: snack.key } })
            }
          />
        ))}
      </div>
      {children}
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar was called outside SnackbarProvider");
  }
  const { dispatch } = context;

  return useCallback(
    (snack: SnackbarType) => {
      dispatch({ type: "ADD_SNACKBAR", payload: { current: snack } });
    },
    [dispatch]
  );
};
