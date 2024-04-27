import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {  Playfair_Display, DM_Sans} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "SDG Club",
  description: "Website of SDG Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
