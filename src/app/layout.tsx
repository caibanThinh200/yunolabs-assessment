import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/dm-sans"; // Defaults to weight 400
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Yunolabs | Asessment",
  description:
    "We're passionate about bringing delicious and enriching food experiences to everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-brice antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
