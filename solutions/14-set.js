//BEGIN 
export default (str) => {
    const filterString = Array.from(new Set([...str])).join('');
    return filterString.length;
  };
  //END