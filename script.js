'use strict';

let money, date;

function start() {
    money = prompt( 'Ваш бюджет на месяц?', '100' );
    date = prompt( 'Введите дату в формате YYYY-MM-DD', '2019-01-01' );

    while( isNaN(money) || money === '' || money == null ) {
        money = prompt( 'Ваш бюджет на месяц?', '100' );
    }
}

start();

const appData = {
    money: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: '',
    savings: true
}

function chooseExpenses() {
    for ( let i = 0; i < 2; i++ ) {
        let a = prompt( 'Введите обязательную статью расходов в этом месяце', 'todo smth' );
        let b = prompt( 'Во сколько обойдется?', '10' );
    
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a !== '' && b !== '' && a.length < 50 && b.length < 10 ) {
            appData.expenses[a] = b;    
        } else {
           i--;
        } 
    } 
}

function detectDayBudget() {
    if (money) {
        appData.moneyPerDay = Number(( appData.money / 30 ).toFixed());
        alert( `бюджет на 1 день: ${appData.moneyPerDay} uah` );
    }    
}

function checkSavings() {
    if ( appData.savings === true ) {
        let save = +prompt( 'Какова сума накоплений?' ),
        percent = +prompt( 'Под какой процeнт?' );

        appData.monthIncome = save / 100 / 12 * percent;
        alert( 'Доход в месяц с вашого дупозита: ' + appData.monthIncome );
    }
}

function detectLevel() {
    if ( appData.moneyPerDay < 100 ) {
        alert( `Уровен достатка min: ${appData.moneyPerDay}` );
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert( `Уровен достатка middle: ${appData.moneyPerDay}` );
    } else if ( appData.moneyPerDay > 2000 ) {
        alert( `Уровен достатка max: ${appData.moneyPerDay}` );
    } else {
        alert( `Уровен достатка Smth wrong` );
    }
}

function chooseOptExpenses() {
    for ( let i = 0; i < 3; i++ ) {
        let a = prompt( 'Статья необязательных расходов?', 'smth' ),
            questionNumber = i + 1;
        if ( typeof(a) != null && a !== '' ) {
            appData.optionalExpenses[questionNumber] = a;
        } else {
            i--;
        }
    }
}

chooseExpenses();
detectDayBudget();
checkSavings();
detectLevel();
chooseOptExpenses();

console.log( JSON.stringify( appData ) );
