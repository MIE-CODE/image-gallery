import { Suspense } from "react";
import { Navbar } from "@/components/Navbar/navbar";
import Gallery from "../components/Gallery/Gallery";
import { ImageSkeleton } from "@/components/skeleton/images";
import GalleryWidget from "@/components/widget/galleryWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <GalleryWidget />
      <Suspense fallback={<ImageSkeleton />}>
        <main className="main">
          <Gallery />
        </main>
      </Suspense>
    </>
  );
}
