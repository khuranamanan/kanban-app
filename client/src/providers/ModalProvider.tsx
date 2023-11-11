"use client";

import BoardModal from "@/components/BoardModal";
import ColumnModal from "@/components/ColumnModal";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import ItemModal from "@/components/ItemModal";
import { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <BoardModal />
      <ConfirmDeleteModal />
      <ColumnModal />
      <ItemModal />
    </>
  );
}

export default ModalProvider;
