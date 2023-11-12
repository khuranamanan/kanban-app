import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function moveItem(itemId: string, newColumnId: string) {
  try {
    const response = await axios.put(`${BASE_URL}/items/move/${itemId}`, {
      newColumnId,
    });
    toast.success("Item Successfully Moved!");
    return response.data.item;
  } catch (error) {
    console.error("moveItem error", error);
    toast.error("Failed to Move Item!");
    return null;
  }
}

export default moveItem;
