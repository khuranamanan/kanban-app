import axios from "axios";
import { Column } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function getColumnsOfBoard(boardId: string): Promise<Column[]> {
  try {
    const response = await axios.get(`${BASE_URL}/columns/board/${boardId}`);
    return response.data.columns as Column[];
  } catch (error) {
    console.error(`getColumnsOfBoard error for boardId: ${boardId}`, error);
    return [];
  }
}

export default getColumnsOfBoard;
