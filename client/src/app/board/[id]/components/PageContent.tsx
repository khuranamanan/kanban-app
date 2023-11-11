"use client";

import { Column } from "@/types";
import ColumnBox from "./ColumnBox";
import Button from "@/components/Button";
import useColumnModal from "@/hooks/useColumnsModal";
import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import { useRouter } from "next/navigation";
import deleteColumn from "@/actions/deleteColumn";
import useItemModal from "@/hooks/useItemModal";

interface PageContentProps {
  columns: Column[];
  boardId: string;
}

function PageContent({ columns, boardId }: PageContentProps) {
  const { onOpen, onEditOpen } = useColumnModal();
  const { setCallback, onClose } = useDeleteConfirmationModal();
  const { onOpen: onItemModalOpen } = useItemModal();
  const router = useRouter();

  function onDeleteOpen(id: string) {
    setCallback(() => {
      deleteColumn(id);
      router.refresh();
      onClose();
    }, "Deleting Column will delete all the associated tasks.");
  }

  return (
    <div className="flex flex-col gap-6 p-4 grow">
      <div className="flex  flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <h2 className="text-xl text-neutral-200">Columns</h2>

        <div>
          <Button
            className="w-fit py-2 text-sm"
            onClick={() => onOpen(boardId)}
          >
            Add Column
          </Button>
        </div>
      </div>

      <div className="flex items-stretch w-full gap-4 grow overflow-x-auto scrollbar">
        {columns.map((column) => (
          <ColumnBox
            key={column._id}
            {...column}
            onEditOpen={() => onEditOpen(column, boardId)}
            onDeleteOpen={() => onDeleteOpen(column._id)}
            onItemModalOpen={() => onItemModalOpen(column._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PageContent;
