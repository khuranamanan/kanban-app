"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useBoardModal from "@/hooks/useBoardModal";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import createBoard from "@/actions/createBoard";
import { useRouter } from "next/navigation";
import editBoard from "@/actions/editBoard";

function BoardModal() {
  const { isOpen, onClose, boardToEdit } = useBoardModal();
  const router = useRouter();

  interface formData {
    name: string;
    description: string;
    requiredColumns: string;
  }

  const { handleSubmit, register, reset } = useForm<formData>({
    defaultValues: {
      name: "",
      description: "",
      requiredColumns: "To Do, In Progress, Completed",
    },
  });

  async function onSubmit(data: formData) {
    if (!!boardToEdit) {
      await editBoard(boardToEdit._id, {
        name: data.name,
        description: data.description,
      });
    } else {
      await createBoard({
        ...data,
        requiredColumns: data.requiredColumns
          .split(",")
          .map((column) => column.trim()),
      });
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
      name: boardToEdit?.name || "",
      description: boardToEdit?.description || "",
      requiredColumns: boardToEdit?.columns
        ? boardToEdit.columns.map((column) => column.name).join(", ")
        : "To Do, In Progress, Completed",
    });
  }, [boardToEdit, reset]);

  return (
    <Modal
      title="Board Modal"
      description={!!boardToEdit ? "Edit Board" : "Add a Board"}
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

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description:</label>
          <Input
            id="description"
            {...register("description", { required: true })}
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="requiredColumns">
            Required Columns (comma separated):
          </label>
          <Input
            id="requiredColumns"
            disabled={!!boardToEdit}
            {...register("requiredColumns", { required: true })}
            type="text"
          />
        </div>

        <Button type="submit" className="mt-2">
          {!!boardToEdit ? "Update" : "Add Board"}
        </Button>
      </form>
    </Modal>
  );
}

export default BoardModal;
