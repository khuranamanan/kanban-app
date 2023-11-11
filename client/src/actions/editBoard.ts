import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function editBoard(
  boardId: string,
  body: { name: string; description: string }
) {
  try {
    const response = await axios.put(`${BASE_URL}/boards/${boardId}`, body);
    toast.success("Board Successfully Edited!");
    return;
  } catch (error) {
    console.error("editBoard error", error);
    toast.error("Failed to Edit Board!");
    return;
  }
}

export default editBoard;
