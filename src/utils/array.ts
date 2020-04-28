export const removeDuplicates = <T>(array: T[]) =>
  array.filter((item, index) => {
    const _item = JSON.stringify(item);
    return (
      index ===
      array.findIndex(obj => {
        return JSON.stringify(obj) === _item;
      })
    );
  });

export const chunk = <T>(array: T[], size: number) => {
  const chunkedArray = [];
  const arrayCopy = [...array];
  const numberOfChildren = Math.ceil(arrayCopy.length / size);

  for (let i = 0; i < numberOfChildren; i++) {
    chunkedArray.push(arrayCopy.splice(0, size));
  }

  return chunkedArray;
};
