import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function editItem(
  itemId: string,
  body: {
    name: string;
    description: string;
    dueDate?: string;
  }
) {
  try {
    const response = await axios.put(`${BASE_URL}/items/${itemId}`, body);
    toast.success("Item Successfully Edited!");
    return;
  } catch (error) {
    console.error("editItem error", error);
    toast.error("Failed to Edit Item!");
    return;
  }
}

export default editItem;
