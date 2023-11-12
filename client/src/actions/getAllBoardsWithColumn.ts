import { Board, BoardWithColumns } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function getAllBoardsWithColumns(): Promise<BoardWithColumns[]> {
  try {
    const response = await axios.get(`${BASE_URL}/boards/columns`);
    return response.data.boards as BoardWithColumns[];
  } catch (error) {
    console.log("getAllBoardsWithColumns error", error);
    return [];
  }
}

export default getAllBoardsWithColumns;
