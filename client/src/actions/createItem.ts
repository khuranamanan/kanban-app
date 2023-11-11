import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function createItem(body: {
  columnId: string;
  name: string;
  description: string;
  dueDate?: string;
}) {
  try {
    const response = await axios.post(`${BASE_URL}/items`, body);
    toast.success("Item Successfully Created!");
    return;
  } catch (error) {
    console.error("createItem error", error);
    toast.error("Failed to Create Item!");
    return;
  }
}

export default createItem;
