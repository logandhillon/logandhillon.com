import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
