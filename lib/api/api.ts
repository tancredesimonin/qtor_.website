export interface PageHomeAttributes {
  h1: string;
  locale: string;
}

export interface PageHomeResponse {
  data: {
    id: string;
    attributes: PageHomeAttributes
  }
}