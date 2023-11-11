import { BoardWithColumns } from "@/types";
import { create } from "zustand";

interface BoardModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onEditOpen: (board: BoardWithColumns) => void;
  boardToEdit: BoardWithColumns | null;
}

const useBoardModal = create<BoardModalStore>((set) => ({
  isOpen: false,
  boardToEdit: null,
  onOpen: () => set({ isOpen: true, boardToEdit: null }),
  onClose: () => set({ isOpen: false, boardToEdit: null }),
  onEditOpen: (board) => set({ isOpen: true, boardToEdit: board }),
}));

export default useBoardModal;
