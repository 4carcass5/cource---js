//BEGIN
const getSameParity = (arr) => {
    if (arr.length === 0) {
      return [];
    }
    const parity = Math.abs(arr[0]) % 2;
    return arr.filter((item) => Math.abs(item) % 2 === parity);
  };
  
  export default getSameParity;
  //END