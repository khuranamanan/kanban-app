import { Board } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function getBoardById(boardId: string): Promise<Board | null> {
  try {
    const response = await axios.get(`${BASE_URL}/boards/${boardId}`);
    return response.data.board as Board;
  } catch (error) {
    console.error(`getBoardById error for boardId: ${boardId}`, error);
    return null;
  }
}

export default getBoardById;
