import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logan Dhillon",
  description: "Logan Dhillon's web portfolio"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/5a740087a2.js" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
