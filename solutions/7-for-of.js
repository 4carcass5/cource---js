//BEGIN
export default function calculateAverage(arr) {
    if (arr.length === 0) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  //END