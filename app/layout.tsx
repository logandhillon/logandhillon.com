import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { Metadata } from "next";
import METADATA from "@/config/site";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Logan Dhillon',
    default: METADATA.title,
  },
  description: METADATA.description,
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    url: 'https://logandhillon.com',
    siteName: 'Logan Dhillon',
    images: [
      {
        url: 'https://logandhillon.com/memoji.jpg',
        width: 500,
        height: 500,
        alt: 'Logan Dhillon - Engineer & Leader',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  icons: METADATA.icon,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta
        name="google-site-verification"
        content="wpclubyVAcYUAC40rgkUB5RAncvSwdtZkyOa8bxg2cQ"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Logan Dhillon",
            "url": "https://logandhillon.com",
            "sameAs": [
              "https://github.com/logandhillon",
              "https://linkedin.com/in/logandhillon"
            ],
            "jobTitle": "Web Developer & Designer"
          }),
        }}
      />
    </head>
    <body className={`${inter.className} min-h-screen`}>
    <Providers>
      <Header/>
      <div className="flex flex-col bg-defaut-50">
        <main className="grow">{children}</main>
      </div>
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}
