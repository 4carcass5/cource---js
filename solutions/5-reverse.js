//BEGIN
export const reverse = (arr) => {
    let i, len = arr.length - 1;
    let len_h = Math.floor(len / 2); 
    for (i = 0; i <= len_h; i++) {
        [arr[i], arr[len - i]] = [arr[len - i], arr[i]];
    }
}
export default reverse;
//END