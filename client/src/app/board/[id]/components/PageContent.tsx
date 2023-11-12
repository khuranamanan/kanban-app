"use client";

import { Column } from "@/types";
import ColumnBox from "./ColumnBox";
import Button from "@/components/Button";
import useColumnModal from "@/hooks/useColumnsModal";
import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import { useRouter } from "next/navigation";
import deleteColumn from "@/actions/deleteColumn";
import useItemModal from "@/hooks/useItemModal";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import moveItem from "@/actions/moveItem";

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

  async function onDragEnd(result: DropResult) {
    console.log(result);
    if (result.destination && result.destination.droppableId) {
      await moveItem(result.draggableId, result.destination.droppableId);
      router.refresh();
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
            <Droppable key={column._id} droppableId={column._id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="h-full"
                >
                  <ColumnBox
                    {...column}
                    onEditOpen={() => onEditOpen(column, boardId)}
                    onDeleteOpen={() => onDeleteOpen(column._id)}
                    onItemModalOpen={() => onItemModalOpen(column._id)}
                    placeholder={provided.placeholder}
                  />
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}

export default PageContent;
