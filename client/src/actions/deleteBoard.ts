import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function deleteBoard(boardId: string) {
  try {
    const response = await axios.delete(`${BASE_URL}/boards/${boardId}`);
    toast.success("Board Successfully Deleted!");
    return;
  } catch (error) {
    console.error("deleteBoard error", error);
    toast.error("Failed to Delete Board!");
    return;
  }
}

export default deleteBoard;
