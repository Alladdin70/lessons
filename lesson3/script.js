
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD");
    if(isNaN(money) || money === null || money == ""){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses(){
    for (let i =0; i<2; i ++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
        if( (typeof(a)==='string') && (typeof(a)!== null) && (typeof(b)!== null)
            && a !=='' && b !== '' && a.length <50) {
                console.log("Done");
                appData.expenses[a] = b;
            } else {
                i= i - 1;
                console.log("Bad choose");
            }
    }
}
chooseExpenses();
/* 
let j = 0;
while (j<2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
}


let k =0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
}while(k<2);
*/

    
appData.moneyPerDay = appData.budget / 30;
if (appData.moneyPerDay <100) {
    console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay >2000){
    console.log("Высокий уровень достатка");
}else {
    console.log("Какая -то фигня");
}
checkSavings();
function checkSavings() {
    if (appData.savings) {
        let save= +prompt("Сумма накоплений?"),
            percent = prompt("Процент?");
        appData.monthIncome = save /100/12*percent;
        alert("Доход с депозита:" + appData.monthIncome);
    }
}