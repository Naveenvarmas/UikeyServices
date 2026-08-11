import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ClientLayout from "./client-layout";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)} suppressHydrationWarning>
      <body style={{ margin: 0, overflow: "hidden" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}