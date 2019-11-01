'use strict';

// data
let startBtn = document.getElementById('start');

let expensesItems = document.getElementsByClassName('expenses-item');
let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');

let btn = document.getElementsByTagName('button');
let expensesItemBtn = btn[0];
let optionalexpensesBtn = btn[1];
let countBudgetBtn = btn[2];

expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent');

// result
// // result-table
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// // time-data
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, date;

startBtn.addEventListener('click', function() {
    date = prompt( 'Введите дату в формате YYYY-MM-DD', '2019-01-01' );
    money = +prompt( 'Ваш бюджет на месяц?', '10000' );
    
    while( isNaN(money) || money === '' || money == null ) {
        money = prompt( 'Ваш бюджет на месяц?', '100000' );
    }

    appData.money = money;
    appData.timeData = date;
    budgetValue.textContent = money.toFixed();
    
    let newDate = new Date(Date.parse(date));
    yearValue.value = newDate.getFullYear();
    monthValue.value = newDate.getMonth() + 1;
    dayValue.value = newDate.getDate();

    expensesItemBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;
    for ( let i = 0; i < expensesItems.length; i++ ) {
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;
    
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a !== '' && b !== '' && a.length < 50 && b.length < 10 ) {
                appData.expenses[a] = b;
                sum += +b;    
            } else {
            i--;
            } 
        } 
    expensesValue.textContent = sum;
    appData.expensesSum = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
    for ( let i = 0; i < optionalexpensesItems.length; i++ ) {
        let a = optionalexpensesItems[i].value;
        appData.optionalExpenses[i] = a;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(){
    if (money) {
        appData.moneyPerDay = Number(( (appData.money - appData.expensesSum) / 30 ).toFixed());
        daybudgetValue.textContent = appData.moneyPerDay;
        if ( appData.moneyPerDay < 100 ) {
            levelValue.textContent = ( `Уровен достатка min: ${appData.moneyPerDay}` );
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = ( `Уровен достатка middle: ${appData.moneyPerDay}` );
        } else if ( appData.moneyPerDay > 2000 ) {
            levelValue.textContent = ( `Уровен достатка max: ${appData.moneyPerDay}` );
        } else {
            levelValue.textContent = ( `Уровен достатка Smth wrong` );
        }
    } else {
        daybudgetValue.textContent = 'Something go to wrong';
    }
});

chooseIncome.addEventListener('input', function(){
    appData.income = chooseIncome.value.split(', ');
    incomeValue.textContent = chooseIncome.value;
});

savings.addEventListener('click', function(event){
    appData.savings = !appData.savings;
});

chooseSum.addEventListener('input', function(){
    if (appData.savings) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        
    }
});

const appData = {
    money: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false, 
}