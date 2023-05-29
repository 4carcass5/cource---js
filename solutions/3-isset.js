//BEGIN
const get = (array, index, value = null) => {
    return 0 <= index && index < array.length ? array[index] : value;
}
export {get};
//END