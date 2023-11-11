"use client";

import deleteItem from "@/actions/deleteItem";
import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import useItemModal from "@/hooks/useItemModal";
import { Item } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface TaskItemProps {
  item: Item;
  columnId: string;
}

function TaskItem({ item, columnId }: TaskItemProps) {
  const { onEditOpen } = useItemModal();
  const { setCallback, onClose } = useDeleteConfirmationModal();
  const router = useRouter();

  function onEditClick() {
    onEditOpen(item, columnId);
  }

  async function onDeleteClick() {
    setCallback(() => {
      deleteItem(item._id);
      onClose();
      router.refresh();
    }, "The task Item will be deleted.");
  }

  return (
    <div className="bg-neutral-800 rounded-md flex flex-col gap-4 w-full p-2">
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
  );
}

export default TaskItem;
