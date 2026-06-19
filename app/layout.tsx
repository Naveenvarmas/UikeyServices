import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Apni Digi",
  description: "Apni Digi Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)}>
      <body>
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="flex-1">
            <Header />

            <main className="p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}