//BEGIN
export const getMax = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    const [max, ...rest] = arr;
    return rest.reduce((acc, curr) => curr > acc ? curr : acc, max);
  };
  //END