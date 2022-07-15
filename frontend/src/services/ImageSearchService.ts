import axios from "axios";
import ImageSearchResponse from "../models/ImageSearchResponse";

export default class ImageSearchService {
  private get baseUrl() {
    return "https://content-customsearch.googleapis.com/customsearch/v1";
  }

  public async search(
    keyword: string,
    startIndex: number = 1
  ): Promise<ImageSearchResponse> {
    const { VITE_CX, VITE_KEY } = import.meta.env;

    return await axios
      .get(this.baseUrl, {
        params: {
          searchType: "image",
          start: startIndex,
          cx: VITE_CX,
          q: keyword,
          key: VITE_KEY,
        },
      })
      .then((r) => r.data);
  }
}
