class Utils {

  static mapAttributesOfCollection = <T>(data: IResponseData<T>[]): T[] => data.map((item) => item.attributes);

  static mapAttributesOfMember = <T>(data: IResponseData<T>) => data.attributes;

  static mapMemberWithRelations = <T>(data: IResponseData<T>) => {
    const { relationships, attributes } = data;
    const { normalizeRelations } = Utils;
    return {
      ...attributes,
      ...normalizeRelations(relationships)
    }
  };

  static mapCollectionWithRelations = <T>(data: IResponseData<T>[] = []) => data.map(item => Utils.mapMemberWithRelations(item))

  static mapMemberWithIncludes = <T>(data: IResponseData<T>, normalizeIncluded: any[]): T => {
    const { relationships, attributes } = data;
    const { normalizeRelationsFromIncluded } = Utils;
    return {
      ...attributes,
      ...normalizeRelationsFromIncluded(relationships, normalizeIncluded)
    }
  };

  static mapCollectionWithIncludes = <T>(data: IResponseData<T>[], normalizeIncluded: any[]) => {
    return data.map(member => {
      return Utils.mapMemberWithIncludes(member, normalizeIncluded)
    })
  };

  static arrayToObject = <T>(array: IResponseData<T>[]): T[] => {
    return array.reduce((obj: any, item) => {
      obj[item.id] = item.attributes;
      return obj
    }, {});
  };

  static normalizeIncluded = (included: any[] = [], types: any[] = []) => {
    const { arrayToObject } = Utils;
    return types.reduce((obj, type) => {
      const value = arrayToObject(included.filter(i => i.type === type));
      if (value) {
        obj[type] = value;
      }
      return obj
    }, {})
  };

  static normalizeRelations = (relationships: any) => {
    return Object.keys(relationships).reduce((obj: { [key: string]: any }, key) => {
      obj[key] = relationships[key].data;
      return obj
    }, {});
  };

  static normalizeRelationsFromIncluded = (relationships: any = {}, included: any[] = []) => {
    return Object.keys(relationships).reduce((obj: any, key) => {
      const { data } = relationships[key];
      let value = null;
      if (Array.isArray(data)) {
        value = data.map(relation => included[relation.type] && included[relation.type][relation.id]).filter(val => Boolean(val));
      } else if (data) {
        value = included[data.type] && included[data.type][data.id]
      }
      if (value) {
        obj[key] = value;
      }
      return obj
    }, {});
  }

}

export default Utils
