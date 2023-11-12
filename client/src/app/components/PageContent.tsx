"use client";

import deleteBoard from "@/actions/deleteBoard";
import BoardItem from "@/components/BoardItem";
import useBoardModal from "@/hooks/useBoardModal";
import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import { BoardWithColumns } from "@/types";
import { useRouter } from "next/navigation";

interface PageContentProps {
  boards: BoardWithColumns[];
}

function PageContent({ boards }: PageContentProps) {
  const router = useRouter();
  const { onEditOpen } = useBoardModal();
  const { setCallback, onClose } = useDeleteConfirmationModal();

  if (boards.length === 0) {
    return <div className="mt-4 text-neutral-400">No Boards Available!</div>;
  }

  function onItemClick(id: string) {
    router.push(`/board/${id}`);
  }

  async function onDeleteOpen(id: string) {
    setCallback(() => {
      deleteBoard(id);
      router.refresh();
      onClose();
    }, "Deleting Board will delete all the associated Columns and tasks.");
  }

  return (
    <div className="flex flex-col w-full gap-4 mt-4 p-4">
      {boards.map((item) => (
        <BoardItem
          {...item}
          key={item._id}
          onItemClick={onItemClick}
          onEditOpen={() => onEditOpen(item)}
          onDeleteOpen={() => onDeleteOpen(item._id)}
        />
      ))}
    </div>
  );
}

export default PageContent;
