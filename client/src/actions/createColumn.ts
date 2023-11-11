import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function createColumn(body: { name: string; boardId: string }) {
  try {
    const response = await axios.post(`${BASE_URL}/columns`, body);
    toast.success("Column Successfully Created!");
    return;
  } catch (error) {
    console.error("createColumn error", error);
    toast.error("Failed to Create Column!");
    return;
  }
}

export default createColumn;
