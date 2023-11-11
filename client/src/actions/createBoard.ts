import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

async function createBoard(body: {
  name: string;
  description: string;
  requiredColumns: String[];
}) {
  try {
    const response = await axios.post(`${BASE_URL}/boards`, body);
    toast.success("Board Successfully Created!");
    return;
  } catch (error) {
    console.log("getBoards error", error);
    toast.error("Failed to Create Board!");
    return [];
  }
}

export default createBoard;
