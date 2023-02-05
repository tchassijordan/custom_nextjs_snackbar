"use strict";

import Head from "next/head";
import { useSnackbar } from "@/lib/context/SnackbarProvider";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const addSnackbar = useSnackbar();

  return (
    <>
      <Head>
        <title>Snackbar compoent with nextjs</title>
        <meta
          name="description"
          content="Snackbar component created with nextjs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center">
        <button
          className="mb-4 rounded-lg border border-green-500 px-3 py-1 text-gray-600 transition hover:bg-green-500 hover:text-white"
          onClick={() =>
            addSnackbar({
              key: "success",
              text: "This is a success snackbar",
              variant: "success",
              icon: CheckCircleIcon,
            })
          }
        >
          Open Success Snackbar
        </button>
        <button
          className="mb-4 rounded-lg border border-red-500 px-3 py-1 text-gray-600 transition hover:bg-red-500 hover:text-white"
          onClick={() =>
            addSnackbar({
              key: "error",
              text: "This is a error snackbar",
              variant: "error",
              icon: ExclamationCircleIcon,
            })
          }
        >
          Open Error Snackbar
        </button>
        <button
          className="mb-4 rounded-lg border border-yellow-500 px-3 py-1 text-gray-600 transition hover:bg-yellow-500 hover:text-white"
          onClick={() =>
            addSnackbar({
              key: "warning",
              text: "This is a warning snackbar",
              variant: "warning",
              icon: ExclamationTriangleIcon,
            })
          }
        >
          Open Warning Snackbar
        </button>
        <button
          className="mb-4 rounded-lg border border-blue-500 px-3 py-1 text-gray-600 transition hover:bg-blue-500 hover:text-white"
          onClick={() =>
            addSnackbar({
              key: "info",
              text: "This is a info snackbar",
              variant: "info",
              icon: InformationCircleIcon,
            })
          }
        >
          Open Info Snackbar
        </button>
      </main>
    </>
  );
}
