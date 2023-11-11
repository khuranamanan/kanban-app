"use client";

import useColumnModal from "@/hooks/useColumnsModal";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import editColumn from "@/actions/editColumn";
import createColumn from "@/actions/createColumn";

function ColumnModal() {
  const { isOpen, onClose, columnToEdit, boardId } = useColumnModal();
  const router = useRouter();

  interface formData {
    name: string;
  }

  const { handleSubmit, register, reset } = useForm<formData>({
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(data: formData) {
    if (!!columnToEdit) {
      await editColumn(columnToEdit._id, { name: data.name });
    } else {
      await createColumn({ name: data.name, boardId: boardId! });
    }

    router.refresh();
    reset();
    onClose();
  }

  function onChange(open: boolean) {
    if (!open) {
      reset();
      onClose();
    }
  }

  useEffect(() => {
    reset({
      name: columnToEdit?.name || "",
    });
  }, [columnToEdit, reset]);

  return (
    <Modal
      title="Column Modal"
      description={!!columnToEdit ? "Edit Column" : "Add a Column"}
      onChange={onChange}
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:</label>
          <Input
            id="name"
            {...register("name", { required: true })}
            type="text"
          />
        </div>

        <Button type="submit" className="mt-2">
          {!!columnToEdit ? "Update" : "Add Column"}
        </Button>
      </form>
    </Modal>
  );
}

export default ColumnModal;
