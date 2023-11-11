import { Board, BoardWithColumns } from "@/types";
import Button from "./Button";
import { ReactHTMLElement } from "react";

interface BoardItemProps extends BoardWithColumns {
  onItemClick: (id: string) => void;
  onEditOpen: () => void;
  onDeleteOpen: () => void;
}

function BoardItem({
  name,
  description,
  onItemClick,
  _id,
  onEditOpen,
  onDeleteOpen,
}: BoardItemProps) {
  function onEditClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onEditOpen();
  }

  function onDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onDeleteOpen();
  }

  return (
    <div
      onClick={() => onItemClick(_id)}
      className="flex flex-col items-center justify-center md:flex-row md:justify-between rounded-md gap-4 overflow-hidden
       bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="flex flex-col items-start w-full gap-y-1">
        <p className="font-semibold w-full">{name}</p>
        <p className="text-neutral-400 text-sm w-full">{description}</p>
      </div>

      <div className="flex gap-2">
        <Button className="w-fit py-2 bg-white" onClick={onEditClick}>
          Edit
        </Button>
        <Button
          className="w-fit py-2 bg-transparent hover:bg-neutral-700/50 text-white"
          onClick={onDeleteClick}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default BoardItem;
