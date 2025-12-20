import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { Providers } from "@/components/providers";
import siteConfig from "../config/site";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    // TODO: create light/dark versions of favicon
    icon: [
      {
        url: siteConfig.icon,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: siteConfig.icon,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: siteConfig.icon,
        type: "image/svg+xml",
      },
    ],
    apple: siteConfig.icon,
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
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
