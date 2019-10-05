'use strict';

let money = Number(prompt('Ваш бюджет на месяц?', '100'));
let date = prompt('Введите дату в формате YYYY-MM-DD', '2019-01-01');

const newExpenses = {};
const appData = {
    money: money,
    timeData: date,
    expenses: '',
    optionalExpenses: '',
    income: '',
    savings: false
}

let questionFirst = prompt('Введите обязательную статью расходов в этом месяце', 'todo smth');
let questionSecond = Number(prompt('Во сколько обойдется?', '10'));
newExpenses[questionFirst] = questionSecond
appData.expenses = newExpenses;
alert(`бюджет на 1 день: ${appData.money/30}`);
console.log(JSON.stringify(appData));
