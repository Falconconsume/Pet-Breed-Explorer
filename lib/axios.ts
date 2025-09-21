import axios from "axios";
import { IBreedImage } from "@/types/breed";

const apiFetch = (api: string, key: string) =>
  axios.get(api || "", {
    headers: {
      "x-api-key": key,
    },
  });

export async function getBreedGallery(
  apiLink: string,
  key: string,
  breedId: string,
  limit = 12,
) {
  const { data: images } = await apiFetch(
    `${apiLink}/images/search?breed_id=${breedId}&limit=${limit}`,
    key,
  );

  return images.map((i: IBreedImage) => ({
    id: i.id,
    url: i.url,
    width: i.width,
    height: i.height,
  }));
}

export default apiFetch;
