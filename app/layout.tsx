import type { Metadata } from "next";
import { Inter} from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowPath",
  description: "Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <main className="bg-transparent min-h-screen">{children}</main>
      </body>
    </html>
  );
}
