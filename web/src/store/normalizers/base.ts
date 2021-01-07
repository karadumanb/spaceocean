import Utils from "./utils";

interface IBaseNormalizer {
  includes?: string[]
}

export function BaseNormalizer<T extends { id: number; }>({
  includes = []
}: IBaseNormalizer = {}): INormalizer<T> {
  return {
    index: ({ data, included }: ICollectionResponse<T>): T[] => {
      const { mapCollectionWithIncludes, normalizeIncluded } = Utils;
      return mapCollectionWithIncludes(data, normalizeIncluded(included, includes))
    },
    show: ({ data, included }: IMemberResponse<T>): T => {
      const { mapMemberWithIncludes, normalizeIncluded } = Utils;
      return mapMemberWithIncludes(data, normalizeIncluded(included, includes))
    },
    create: ({ data, included }: IMemberResponse<T>): T => {
      const { mapMemberWithIncludes, normalizeIncluded } = Utils;
      return mapMemberWithIncludes(data, normalizeIncluded(included, includes))
    },
    update: ({ data, included }: IMemberResponse<T>): T => {
      const { mapMemberWithIncludes, normalizeIncluded } = Utils;
      return mapMemberWithIncludes(data, normalizeIncluded(included, includes))
    },
    destroy: (data: IMemberResponse<T>): T => {
      return Utils.mapAttributesOfMember(data.data);
    },
  }
};

