import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logan Dhillon",
  description: "Logan Dhillon's web portfolio",
  icons: {
    icon: "/favicon.ico",
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
          <div className="flex flex-col bg-defaut-50">
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
