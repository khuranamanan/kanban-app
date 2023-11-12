import getBoardById from "@/actions/getBoardById";
import getColumnsOfBoard from "@/actions/getColumnsOfBoard";
import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export const revalidate = 0;

async function BoardPage({ params }: { params: { id: string } }) {
  const board = await getBoardById(params.id);
  const columns = await getColumnsOfBoard(params.id);

  return (
    <div className="bg-neutral-900 flex flex-col rounded-lg w-full h-full min-h-[600px] overflow-hidden overflow-y-auto scrollbar">
      <Header>
        <h1 className="text-white text-3xl font-semibold">{board?.name}</h1>
        <p className="text-neutral-400 text-base">{board?.description}</p>
      </Header>
      {board === null && (
        <div className="mt-4 text-neutral-400">Board Not Found!</div>
      )}
      {board && <PageContent columns={columns} boardId={board._id} />}
    </div>
  );
}

export default BoardPage;
