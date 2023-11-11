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

// import { Board, BoardWithColumns, Column } from "@/types";
// import axios from "axios";
// import toast from "react-hot-toast";

// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// async function getAllBoardsWithColumns(): Promise<BoardWithColumns[]> {
//   try {
//     const response = await axios.get(`${BASE_URL}/boards`);
//     const boards: Board[] = response.data.boards;

//     const columnsById: Record<string, Column> = {};

//     await Promise.all(
//       boards.map(async (board) => {
//         const columnIds = board.columns;

//         const columnDetails = await Promise.all<Column>(
//           columnIds.map(async (columnId) => {
//             const columnResponse = await axios.get<{ column: Column }>(
//               `${BASE_URL}/columns/${columnId}`
//             );
//             return columnResponse.data.column;
//           })
//         );

//         columnDetails.forEach((column) => {
//           columnsById[column._id] = column;
//         });
//       })
//     );

//     const boardsWithColumns: BoardWithColumns[] = boards.map((board) => ({
//       ...board,
//       columns: board.columns.map((columnId) => columnsById[columnId]),
//     }));

//     return boardsWithColumns;
//   } catch (error) {
//     console.error("getAllBoardsWithColumns error", error);
//     toast.error("Failed to Fetch Boards!");
//     return [];
//   }
// }

// export default getAllBoardsWithColumns;
