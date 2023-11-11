import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function deleteColumn(columnId: string) {
  try {
    const response = await axios.delete(`${BASE_URL}/columns/${columnId}`);
    toast.success("Column Successfully Deleted!");
    return;
  } catch (error) {
    console.error("deleteColumn error", error);
    toast.error("Failed to Delete Column!");
    return;
  }
}

export default deleteColumn;
