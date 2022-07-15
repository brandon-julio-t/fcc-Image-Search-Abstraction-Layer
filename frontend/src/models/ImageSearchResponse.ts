import ImageItem from "./ImageItem";

export default interface ImageSearchResponse {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: {
    previousPage: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
        searchType: string;
      }
    ];
    request: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
        searchType: string;
      }
    ];
    nextPage: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
        searchType: string;
      }
    ];
  };
  context: {
    title: string;
  };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: ImageItem[];
}
