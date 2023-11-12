import TaskItem from "@/components/TaskItem";
import { Column } from "@/types";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

interface ColumnBoxProps extends Column {
  onEditOpen: () => void;
  onDeleteOpen: () => void;
  onItemModalOpen: () => void;
  placeholder: React.ReactNode;
}

function ColumnBox({
  name,
  onEditOpen,
  onDeleteOpen,
  onItemModalOpen,
  items,
  _id,
  placeholder,
}: ColumnBoxProps) {
  return (
    <div className="bg-neutral-400/5 rounded-md overflow-y-auto flex flex-col gap-4 w-60 shrink-0 p-2 h-full">
      <div className="flex justify-between items-center border-b pb-1 border-neutral-800 gap-2">
        <h3 className="text-sm text-neutral-300 truncate">{name}</h3>
        <div className="inline-flex gap-2">
          <button
            onClick={onItemModalOpen}
            className="hover:bg-emerald-500/10 text-neutral-300 hover:text-emerald-500 p-1 rounded"
          >
            <AiOutlinePlus />
          </button>
          <button
            onClick={onEditOpen}
            className="hover:bg-white/10 text-neutral-300 hover:text-white p-1 rounded"
          >
            <AiOutlineEdit />
          </button>
          <button
            onClick={onDeleteOpen}
            className="hover:bg-red-400/10 text-red-400 hover:text-red-500 p-1 rounded"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <TaskItem key={item._id} item={item} columnId={_id} index={index} />
        ))}
        {placeholder}
      </div>
    </div>
  );
}

export default ColumnBox;
