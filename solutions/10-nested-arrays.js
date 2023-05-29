//BEGIN 
export const getSuperSeriesWinner = (matrix) => {
    let canadaWin = 0;
    let ussrWin = 0;
    matrix.forEach((item) => {
      if (item[0] > item[1]) {
        canadaWin += 1
      } else if (item[0] < item[1]) {
        ussrWin += 1
      }
    });
    if (canadaWin > ussrWin) {
      return "canada"
    } else if (canadaWin < ussrWin) {
      return "ussr"
    } else {
      return null
    }
  };
  export default getSuperSeriesWinner;
  //END