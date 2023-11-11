import Header from "@/components/Header";
import PageContent from "./components/PageContent";
import getAllBoardsWithColumns from "@/actions/getAllBoardsWithColumn";

export const revalidate = 0;

export default async function Home() {
  const boards = await getAllBoardsWithColumns();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto scrollbar">
      <Header>
        <h1 className="text-white text-3xl font-semibold">Boards</h1>
      </Header>
      <main>
        <PageContent boards={boards} />
      </main>
    </div>
  );
}
