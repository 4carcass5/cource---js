//BEGIN
export const swap = (array) => {
    let len = array.length;
    len > 1 ? [array[0], array[len - 1]] = [array[len - 1], array[0]] : null;
    return array;
}
export default swap;
//END