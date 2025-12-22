import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import METADATA from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  icons: {
    // TODO: create light/dark versions of favicon
    icon: [
      {
        url: METADATA.icon,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: METADATA.icon,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: METADATA.icon,
        type: "image/svg+xml",
      },
    ],
    apple: METADATA.icon,
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-defaut-50">
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}
