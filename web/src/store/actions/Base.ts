import { AxiosResponse } from 'axios';
import { parseError } from "src/lib/error_handler";
import Api from 'src/lib/api';

export function BaseActions<T extends { id: number }>({
  normalizer,
  resource
}: {
  normalizer: Partial<INormalizer<T>>,
  resource: Partial<IResource>
}) {
  return {
    index: (params: CollectionArgs): Promise<PaginatedResponse<T>> => {
      return new Promise((resolve, reject) => {
        Api.get<ICollectionResponse<T>>(resource.collection(params).index)
          .then((response: AxiosResponse) => {
            const data = normalizer.index(response.data);
            const pagination = response.data.meta;
            resolve({ data, pagination });
          }).catch((error: string[]) => {
            reject(parseError(error))
          })
      })
    },
    show: (params: MemberArgs): Promise<T> => {
      return new Promise((resolve, reject) => {
        Api.get<IMemberResponse<T>>(resource.member(params).show)
          .then((response:AxiosResponse) => {
            const data = normalizer.show(response.data);
            resolve(data);
          }).catch((error: string[]) => {
            reject(parseError(error))
          })
      })
    },
    update: (payload: T): Promise<T> => {
      return new Promise((resolve, reject) => {
        Api.put<T>(resource.member({ id: payload.id }).update, payload)
          .then((response: AxiosResponse) => {
            const data = normalizer.update(response.data);
            resolve(data)
          }).catch((error: string[]) => {
            reject(parseError(error))
          })
      })
    },
    create: (payload: T): Promise<T> => {
      return new Promise((resolve, reject) => {
        Api.post<T>(resource.member().create, payload)
          .then((response: AxiosResponse) => {
            const data = normalizer.create(response.data);
            resolve(data)
          }).catch((error: string[]) => {
            reject(parseError(error))
          })
      })
    },
    destroy: (params: MemberArgs): Promise<T> => {
      return new Promise((resolve, reject) => {
        Api.delete<T>(resource.member(params).destroy)
          .then((response: AxiosResponse) => {
            const data = normalizer.destroy(response.data);
            resolve(data)
          }).catch((error: string[]) => {
            reject(parseError(error))
          })
      })
    }
  }
};
