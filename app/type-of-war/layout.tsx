import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Type of War - Real-Time Typing Strategy Game",
  description:
    "Battle with your keyboard. Type faster, think quicker, dominate the arena in this real-time typing strategy game.",
  icons: "/type-of-war/favicon.jpg",
};

export default function TypeOfWarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
