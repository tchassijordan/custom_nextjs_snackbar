import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SnackbarProvider from "@/lib/context/SnackbarProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}
