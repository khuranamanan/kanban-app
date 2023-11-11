import { Board } from "@/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface BoardListItemProps extends Board {
  active: boolean;
}

function BoardListItem({ _id, name, active }: BoardListItemProps) {
  return (
    <Link
      href={`/board/${_id}`}
      className={twMerge(
        "w-full truncate text-sm font-medium cursor-pointer hover:bg-neutral-600/30 hover:text-white transition text-neutral-400  p-2 rounded",
        active && "text-white bg-neutral-600/30"
      )}
    >
      {name}
    </Link>
  );
}

export default BoardListItem;
