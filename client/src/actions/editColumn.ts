import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function editColumn(columnId: string, body: { name: string }) {
  try {
    const response = await axios.put(`${BASE_URL}/columns/${columnId}`, body);
    toast.success("Column Successfully Edited!");
    return;
  } catch (error) {
    console.error("editColumn error", error);
    toast.error("Failed to Edit Column!");
    return;
  }
}

export default editColumn;
