export type ResponseData<T> = {
  status: string;
  message: string;
  data: T;
};

export type ResponsePaginatedData<T> = {
  data: T;
  meta: ResponseMetaData;
  links: ResponseLinksData;
};

export type ResponseLinksData = {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
};

export type ResponseMetaData = {
  current_page: number;
  per_page: number;
  to: number;
  from: number;
  last_page: number;
  path: string;
  total: number;
};
