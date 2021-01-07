declare interface MemberSerializerResponse<T> {
  data: SerializerResponseData<T>,
  included: SerializerResponseData<any>[]
}

declare interface CollectionSerializerResponse<T> {
  data: SerializerResponseData<T>[],
  included: SerializerResponseData<any>[],
  meta: PaginationMeta
}

declare interface SerializerResponseData<T> {
  id: string,
  type: string,
  attributes: T,
  relationships: {
    [key: string]: {
      data: any
    }
  }
}

declare interface Relationship {
  id: string,
  type: string
}

declare interface PaginationMeta {
  current_page: number,
  next_page: number,
  prev_page: number,
  total_pages: number,
  total_count: number,
  per_page: number
}

declare interface INormalizedIncluded {
  [key: string]: {
    [key: string]: any
  }
}

declare type RequestPayload<T> = { [key: string]: string | number | T | RequestPayload<any> } | T


declare type PaginatedResponse<T> = {
  data: T[],
  pagination?: IPaginationMeta
}
