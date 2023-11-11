import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function deleteItem(itemId: string) {
  try {
    const response = await axios.delete(`${BASE_URL}/items/${itemId}`);
    toast.success("Item Successfully Deleted!");
    return;
  } catch (error) {
    console.error("deleteItem error", error);
    toast.error("Failed to Delete Item!");
    return;
  }
}

export default deleteItem;
