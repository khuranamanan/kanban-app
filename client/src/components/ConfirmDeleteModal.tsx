"use client";

import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import Modal from "./Modal";
import Button from "./Button";

function ConfirmDeleteModal() {
  const { isOpen, onClose, deleteMessage, onDelete } =
    useDeleteConfirmationModal();

  function onChange(open: boolean) {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Are you sure?"
      description={deleteMessage}
      onChange={onChange}
    >
      <div className="flex justify-end gap-4">
        <Button onClick={onClose} className="bg-white">
          Cancel
        </Button>
        <Button onClick={onDelete} className="bg-red-400 text-white">
          Confirm Delete
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;
