import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/images";
import ImageContainer from "./imageContainer";
import getNextPrevPages from "@/lib/getPrevNextPages";

import addBlurrdDataUrls from "@/lib/getBase64";
import Footer from "../Footer/Footer";
type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};
export default async function Gallery({ topic = "curated", page }: Props) {
  let url;
  if (topic === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}&per_page=80`;
  } else if (topic === "curated") {
    url = "https://api.pexels.com/v1/curated?per_page=80";
  } else if (page) {
    url = `https://api.pexels.com/v1/search?query=${topic}&per_page=80`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=80`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);
  if (!images || images.per_page === 0)
    return <h2 style={{ marginTop: "40px" }}> No Images found</h2>;

  const photosWithBlur = await addBlurrdDataUrls(images);
  const { nextPage, prevPage } = getNextPrevPages(images);
  const footerProps = { topic, page, nextPage, prevPage };
  return (
    <div>
      <div className="gallery">
        {photosWithBlur.map((image) => (
          <ImageContainer key={image.id} photo={image} />
        ))}
      </div>
      <Footer {...footerProps} />
    </div>
  );
}
