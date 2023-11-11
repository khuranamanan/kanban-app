import { Column } from "@/types";
import { create } from "zustand";

interface ColumnModalStore {
  isOpen: boolean;
  boardId: string | null;
  onOpen: (boardId: string) => void;
  onClose: () => void;
  onEditOpen: (column: Column, boardId: string) => void;
  columnToEdit: Column | null;
}

const useColumnModal = create<ColumnModalStore>((set) => ({
  isOpen: false,
  columnToEdit: null,
  boardId: null,
  onOpen: (boardId) =>
    set({ isOpen: true, columnToEdit: null, boardId: boardId }),
  onClose: () => set({ isOpen: false, columnToEdit: null, boardId: null }),
  onEditOpen: (column, boardId) =>
    set({ isOpen: true, columnToEdit: column, boardId: boardId }),
}));

export default useColumnModal;
