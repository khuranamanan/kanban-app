import axios from "axios";
import { Item } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function getAllItemsByColumn(columnId: string): Promise<Item[]> {
  try {
    const response = await axios.get(`${BASE_URL}/items/column/${columnId}`);
    return response.data.items as Item[];
  } catch (error) {
    console.error(`getAllItemsByColumn error for columnId: ${columnId}`, error);
    return [];
  }
}

export default getAllItemsByColumn;
