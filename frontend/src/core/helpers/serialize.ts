/**
 * serializeDTO method removes props which doesn't exists in dtoClass definitions.
 *
 * @param dtoClass Class to check properties
 * @param data Data object to serialize depend on dtoClass props
 * @returns Serialized data object
 */

export const serializeDTO = (dtoClass: any, data: any) => {
  const serializedObject = new dtoClass();
  const properties = Object.getOwnPropertyNames(serializedObject);
  properties.forEach((propertyName) => {
    serializedObject[propertyName] = data[propertyName];
  });
  return serializedObject;
};
