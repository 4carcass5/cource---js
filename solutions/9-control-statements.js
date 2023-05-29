//BEGIN
export default function getTotalAmount(wallet, currency) {
    let totalAmount = 0;
    for (let i = 0; i < wallet.length; i++) {
      const currentMoney = wallet[i];
      const currentCurrency = currentMoney.slice(0, 3);
      const currentAmount = Number(currentMoney.slice(4));
      if (currentCurrency === currency) {
        totalAmount += currentAmount;
      }
    }
    return totalAmount;
  }
  //END