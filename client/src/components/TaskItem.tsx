"use client";

import deleteItem from "@/actions/deleteItem";
import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import useItemModal from "@/hooks/useItemModal";
import { Item } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  item: Item;
  columnId: string;
  index: number;
}

function TaskItem({ item, columnId, index }: TaskItemProps) {
  const { onEditOpen } = useItemModal();
  const { setCallback, onClose } = useDeleteConfirmationModal();

  function onEditClick() {
    onEditOpen(item, columnId);
  }

  function onDeleteClick() {
    setCallback(async () => {
      await deleteItem(item._id);
      onClose();
    }, "The task Item will be deleted.");
  }

  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided) => (
        <div
          className="bg-neutral-800 rounded-md flex flex-col gap-4 w-full p-2 select-none"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            {item.dueDate && (
              <p className="text-neutral-400 text-xs">
                Due: {formatDate(item.dueDate)}
              </p>
            )}
            <p className="text-white">{item.name}</p>
            <p className="text-neutral-400 text-xs">{item.description}</p>
          </div>
          <div className="inline-flex justify-end gap-2">
            <button
              onClick={onEditClick}
              className="hover:bg-white/10 text-neutral-300 hover:text-white p-1 rounded"
            >
              <AiOutlineEdit />
            </button>
            <button
              onClick={onDeleteClick}
              className="hover:bg-red-400/10 text-red-400 hover:text-red-500 p-1 rounded"
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskItem;
