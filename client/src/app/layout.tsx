import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ReduxProvider from "@/providers/ReduxProvider";
import getBoards from "@/actions/getAllBoards";
import ToastProvider from "@/providers/ToastProvider";
import ModalProvider from "@/providers/ModalProvider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban App",
  description:
    "A Kanban app for efficient task management and workflow visualization.",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const boards = await getBoards();

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToastProvider />
        <ReduxProvider>
          <ModalProvider />
          <Sidebar boards={boards}>{children}</Sidebar>
        </ReduxProvider>
      </body>
    </html>
  );
}
