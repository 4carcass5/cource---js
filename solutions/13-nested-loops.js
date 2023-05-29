//BEGIN
export default function getSameCount(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    let count = 0;
    set1.forEach((value) => {
      if (set2.has(value)) {
        count++;
      }
    });
    return count;
  }
  //END