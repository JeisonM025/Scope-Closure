//alcancia

const moneyBo =()=>{
    var saveCoins=0;
    const countCoins = (coins) =>{
        saveCoins+=coins;
        console.log(`MoneBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBo();
myMoneyBox(4);//4
myMoneyBox(6);//10 recuerda valor anterior
myMoneyBox(10);//20 ///////