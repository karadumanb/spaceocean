declare type FilterType = {
  [key: string]: string | string[] | boolean | number | number[]
}
declare type CollectionArgs = {
  [key: string]: string | string[] | FilterType | boolean | number,
  filters?: FilterType
  includes?: string[]
}
declare type MemberArgs = {
  id?: number,
  params?: CollectionArgs
}

declare interface INormalizer<T extends { id: number }> {
  index: (data: ICollectionResponse<T>) => T[];
  show: (data: IMemberResponse<T>) => T;
  update: (data: IMemberResponse<T>) => T;
  create: (data: IMemberResponse<T>) => T;
  destroy: (data: IMemberResponse<T>) => T;
}

declare interface IResource {
  collection: (params?: CollectionArgs) => Partial<IResourceCollectionProps>,
  member: (args?: MemberArgs) => Partial<IResourceMemberProps>,
  base: string,
};

interface IResourceMemberProps {
  show: string;
  update: string;
  destroy: string;
  create: string;
}

interface IResourceCollectionProps {
  index: string;
}
