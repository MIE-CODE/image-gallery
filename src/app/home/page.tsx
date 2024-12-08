import Gallery from "@/components/Gallery/Gallery";
import { Navbar } from "@/components/Navbar/navbar";
import { ImageSkeleton } from "@/components/skeleton/images";
import GalleryWidget from "@/components/widget/galleryWidget";
import { Suspense } from "react";

const Home = () => {
  return (
    <main className="main">
      <Navbar />
      <GalleryWidget />
      <Suspense fallback={<ImageSkeleton />}>
        <Gallery />
      </Suspense>
    </main>
  );
};
export default Home;
