"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

import { useRouter } from "next/navigation";
import useItemModal from "@/hooks/useItemModal";
import editItem from "@/actions/editItem";
import createItem from "@/actions/createItem";

function ItemModal() {
  const { isOpen, onClose, itemToEdit, columnId } = useItemModal();
  const router = useRouter();

  interface formData {
    name: string;
    description: string;
    dueDate: string;
  }

  const { handleSubmit, register, reset } = useForm<formData>({
    defaultValues: {
      name: "",
      description: "",
      dueDate: "",
    },
  });

  async function onSubmit(data: formData) {
    if (!!itemToEdit) {
      await editItem(itemToEdit._id, data);
    } else {
      await createItem({ ...data, columnId: columnId! });
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
      name: itemToEdit?.name || "",
      description: itemToEdit?.description || "",
      dueDate: itemToEdit?.dueDate || "",
    });
  }, [itemToEdit, reset]);

  return (
    <Modal
      title="Item Modal"
      description={!!itemToEdit ? "Edit Item" : "Add an Item"}
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
          <label htmlFor="dueDate">Due Date:</label>
          <Input
            id="dueDate"
            {...register("dueDate")}
            type="date"
          />
        </div>

        <Button type="submit" className="mt-2">
          {!!itemToEdit ? "Update" : "Add Item"}
        </Button>
      </form>
    </Modal>
  );
}

export default ItemModal;
