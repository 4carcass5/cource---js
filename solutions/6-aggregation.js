//BEGIN
export const calculateSum = (array) => {
    if (array.length === 0) { 
      return 0; 
    }
    return array.reduce((a, b) => !(b % 3) ? a + b : a, 0);
  }
  export default calculateSum;
  //END