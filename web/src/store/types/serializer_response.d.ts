declare interface IMemberResponse<T> {
  data: IResponseData<T>,
  included?: IResponseData<any>[]
}

declare interface ICollectionResponse<T> {
  data: IResponseData<T>[],
  included?: IResponseData<any>[],
  meta: IPaginationMeta
}

declare interface IResponseData<T> {
  id: string,
  type: string,
  attributes: T,
  relationships?: {
    [key: string]: {
      data: any
    }
  }
}

declare interface IPaginationMeta {
  current_page: number,
  next_page: number,
  prev_page: number,
  total_pages: number,
  total_count: number,
  per_page: number
}

