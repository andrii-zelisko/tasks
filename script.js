'use strict';

let money, date;

function start() {
    money = prompt( 'Ваш бюджет на месяц?', '10000' );
    date = prompt( 'Введите дату в формате YYYY-MM-DD', '2019-01-01' );

    while( isNaN(money) || money === '' || money == null ) {
        money = prompt( 'Ваш бюджет на месяц?', '100000' );
    }
}

start();

const appData = {
    money: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: '',
    savings: true, 
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        if (money) {
            appData.moneyPerDay = Number(( appData.money / 30 ).toFixed());
            alert( `бюджет на 1 день: ${appData.moneyPerDay} uah` );
        }  
    },
    checkSavings: function() {
        if ( appData.savings === true ) {
            let save = +prompt( 'Какова сума накоплений?' ),
            percent = +prompt( 'Под какой процeнт?' );
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert( 'Доход в месяц с вашого дупозита: ' + appData.monthIncome );
        }
    },
    detectLevel: function() {
        if ( appData.moneyPerDay < 100 ) {
            alert( `Уровен достатка min: ${appData.moneyPerDay}` );
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert( `Уровен достатка middle: ${appData.moneyPerDay}` );
        } else if ( appData.moneyPerDay > 2000 ) {
            alert( `Уровен достатка max: ${appData.moneyPerDay}` );
        } else {
            alert( `Уровен достатка Smth wrong` );
        }
    },
    chooseOptExpenses: function() {
        for ( let i = 0; i < 3; i++ ) {
            let a = prompt( 'Статья необязательных расходов?', 'smth' ),
                questionNumber = i + 1;
            if ( typeof(a) != null && a !== '' ) {
                appData.optionalExpenses[questionNumber] = a;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++ ) {
            let items = prompt('Що принесе додaтковий дохід (перерахуйте через кому)?', '');
            appData.income = items.split(', ');
            if (this.isAllString(appData.income)) {
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
            } else {
                i--;
            }
        }
        console.log('Способы доп. заработка: ');
        appData.income && appData.income.forEach(function(item, index) {
            console.log(`${index + 1}: -${item}`);
        });
    },
    isAllString: function(stringArray) {
        let flag = 1;
        for (let value of stringArray) {
            if ( isNaN(value) && typeof(value) === 'string' && typeof(value) != null && value != '' ) {
                flag = 1;
            } else {
                flag = 0;
                break;
            }
        }
        return flag;
    }
}

appData.chooseIncome();

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log( `ключ: ${key} - данные: ${appData[key]}`);
}

console.log( `Наша программа включает в себя данные(JSON): ${JSON.stringify( appData )}`);
