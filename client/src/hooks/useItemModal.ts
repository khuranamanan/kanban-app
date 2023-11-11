import { Item } from "@/types";
import { create } from "zustand";

interface ItemModalStore {
  isOpen: boolean;
  columnId: string | null;
  onOpen: (columnId: string) => void;
  onClose: () => void;
  onEditOpen: (item: Item, columnId: string) => void;
  itemToEdit: Item | null;
}

const useItemModal = create<ItemModalStore>((set) => ({
  isOpen: false,
  itemToEdit: null,
  columnId: null,
  onOpen: (columnId) => set({ isOpen: true, itemToEdit: null, columnId }),
  onClose: () => set({ isOpen: false, itemToEdit: null, columnId: null }),
  onEditOpen: (item, columnId) =>
    set({ isOpen: true, itemToEdit: item, columnId }),
}));

export default useItemModal;
