import { create } from "zustand";

interface DeleteConfirmationModalStore {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
  setCallback: (onDelete: () => void, message: string) => void;
  deleteMessage: string;
}

const useDeleteConfirmationModal = create<DeleteConfirmationModalStore>(
  (set) => ({
    isOpen: false,
    onDelete: () => {},
    onClose: () =>
      set({ isOpen: false, onDelete: () => {}, deleteMessage: "" }),
    setCallback: (onDelete, deleteMessage) =>
      set({ isOpen: true, onDelete, deleteMessage }),
    deleteMessage: "",
  })
);

export default useDeleteConfirmationModal;
