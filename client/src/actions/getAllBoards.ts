import { Board } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function getBoards(): Promise<Board[]> {
  try {
    const response = await axios.get(`${BASE_URL}/boards`);
    return response.data.boards as Board[];
  } catch (error) {
    console.log("getBoards error", error);
    return [];
  }
}

export default getBoards;
