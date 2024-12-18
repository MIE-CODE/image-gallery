import type { ImagesResults } from "@/models/images";
import { ImagesSchemaWithPhotos } from "@/models/images";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });
    if (!res) throw new Error("Fetch Images error!\n");
    const imagesResults: ImagesResults = await res.json();
    // console.log(imagesResult);
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
