"use client";

import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";

import Box from "./Box";
import { twMerge } from "tailwind-merge";
import BoardList from "./BoardList";
import { Board } from "@/types";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
  boards: Board[];
}

function Sidebar({ children, boards }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={twMerge(`flex h-full`)}>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <Link
              href={"/"}
              className={twMerge(
                "flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
                pathname === "/" && "text-white"
              )}
            >
              <HiHome size={26} />
              <p className="truncate w-full">Home</p>
            </Link>
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          {/* <Library songs={songs} /> */}
          <BoardList boards={boards} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
}

export default Sidebar;
