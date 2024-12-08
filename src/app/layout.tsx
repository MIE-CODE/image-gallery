import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "../styles/global.scss";
import Head from "next/head";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gallerium - home",
  description:
    "Discover Gallerium, the ultimate platform for showcasing and organizing your images with ease. Enjoy drag-and-drop uploads, real-time updates, and a visually stunning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="image gallery, photo gallery app, nextjs gallery app, upload and organize images, responsive image gallery, dynamic gallery UI, lazy loading images, image organization tool"
        />
        <meta name="author" content="MIE - TECH" />
        <meta
          property="og:title"
          content="Gallerium - Your Dynamic Image Gallery"
        />
      </Head>
      <body className={lora.className}>{children}</body>
    </html>
  );
}
