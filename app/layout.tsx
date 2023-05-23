import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import { Provider } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next playground app",
  description: "A playground app, login and have a todo list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen justify-between items-start p-24">
          <nav className="flex flex-col gap-4 border-2 p-4 border-blue-700">
            <Link href="/">Home</Link>
            <Link href="/todos">Todos</Link>
          </nav>
          <div className="flex-1 flex-col justify-center">
            <Provider>{children}</Provider>
          </div>
        </main>
      </body>
    </html>
  );
}
