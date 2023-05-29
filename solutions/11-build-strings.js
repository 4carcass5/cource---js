//BEGIN
export const buildDefinitionList = (arr) => {
    if (arr.length === 0) {
      return '';
    }
    let result = '<dl>';
    for (let i = 0; i < arr.length; i++) {
      const term = arr[i][0];
      const definition = arr[i][1];
      result += `<dt>${term}</dt><dd>${definition}</dd>`;
    }
    result += '</dl>';
    return result;
  };
  
  export default buildDefinitionList;
  //END