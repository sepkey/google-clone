export interface ISearchItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
}

export interface IImageSearchItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: { contextLink: string };
}

export interface IData {
  items: ISearchItem[];
  searchInformation: ISearchInfo;
}

export interface IImageData {
  items: IImageSearchItem[];
  searchInformation: ISearchInfo;
}

interface ISearchInfo {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
