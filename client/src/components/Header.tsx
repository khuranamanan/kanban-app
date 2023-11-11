"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import useBoardModal from "@/hooks/useBoardModal";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  const router = useRouter();
  const { onOpen } = useBoardModal();
  const pathname = usePathname();

  return (
    <header
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          {pathname === "/" && (
            <Button
              className="inline-flex gap-x-2 items-center"
              onClick={() => onOpen()}
            >
              <AiOutlinePlus /> Add Board
            </Button>
          )}
        </div>
      </div>
      {children}
    </header>
  );
}
