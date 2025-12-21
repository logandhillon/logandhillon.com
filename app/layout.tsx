import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { Providers } from "@/components/providers";
import METADATA from "../config/content";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="wpclubyVAcYUAC40rgkUB5RAncvSwdtZkyOa8bxg2cQ"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="flex flex-col bg-defaut-50">
            <main className="grow">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
