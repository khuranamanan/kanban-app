"use client";

import { Toaster } from "react-hot-toast";

function ToastProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
}

export default ToastProvider;
