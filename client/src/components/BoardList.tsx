"use client";

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdTableChart } from "react-icons/md";
import useBoardModal from "@/hooks/useBoardModal";
import { Board } from "@/types";
import BoardListItem from "./BoardListItem";
import { usePathname } from "next/navigation";

interface BoardListProps {
  boards: Board[];
}

export default function BoardList({ boards }: BoardListProps) {
  const boardModal = useBoardModal();
  const pathname = usePathname();

  function onAddBoardCLick() {
    return boardModal.onOpen();
  }

  return (
    <div className="flex flex-col">
      <div className="text-neutral-400 flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <MdTableChart size={20} />
          <p className="font-medium text-base">Your Boards</p>
        </div>
        <AiOutlinePlus
          onClick={onAddBoardCLick}
          className="cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-5">
        {boards.length === 0 ? (
          <div className="mt-4 text-neutral-400">No Boards Available!</div>
        ) : (
          boards.map((board) => (
            <BoardListItem
              key={board._id}
              {...board}
              active={pathname.includes(board._id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
