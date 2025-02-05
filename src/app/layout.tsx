import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Footer from "@/components/footer";
import { HeroUIProvider } from "@heroui/react";

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
        <script
          async
          src="https://kit.fontawesome.com/5a740087a2.js"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-site-verification"
          content="wpclubyVAcYUAC40rgkUB5RAncvSwdtZkyOa8bxg2cQ"
        />
      </head>
      <body className={inter.className}>
        <HeroUIProvider>
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
