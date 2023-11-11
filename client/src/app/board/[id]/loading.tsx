"use client";

import { BeatLoader } from "react-spinners";

import Box from "@/components/Box";

function Loading() {
  return (
    <Box className="h-full flex items-center justify-center">
      <BeatLoader color="#22c55e" size={30} />
    </Box>
  );
}

export default Loading;
