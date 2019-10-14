'use strict';

let money = Number( prompt( 'Ваш бюджет на месяц?', '100' ) );
let date = prompt( 'Введите дату в формате YYYY-MM-DD', '2019-01-01' );

const appData = {
    money: money,
    timeData: date,
    expenses: {},
    optionalExpenses: '',
    income: '',
    savings: false
}

// for

for ( let i = 0; i < 2; i++ ) {
    let a = prompt( 'Введите обязательную статью расходов в этом месяце', 'todo smth' );
    let b = Number( prompt( 'Во сколько обойдется?', '10' ) );

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a !== '' && b !== '' && a.length < 50 && b.length < 10 ) {
        appData.expenses[a] = b;    
    } else {
       i--;
    } 
}

// do ... while

let i1 = 0;
do {
   
    let a = prompt( 'Введите обязательную статью расходов в этом месяце', 'todo smth' );
    let b = Number( prompt( 'Во сколько обойдется?', '10' ) );

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a !== '' && b !== '' && a.length < 50 && b.length < 10 ) {
        appData.expenses[a] = b;    
    } else {
       i--;
    }
    
    i1++;
    
} while ( i1 < 2 );

// while
let i2 = 0;
while (  i2 < 2 ) {
    let a = prompt( 'Введите обязательную статью расходов в этом месяце', 'todo smth' );
    let b = Number( prompt( 'Во сколько обойдется?', '10' ) );

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a !== '' && b !== '' && a.length < 50 && b.length < 10 ) {
        appData.expenses[a] = b;    
    } else {
       i--;
    } 
    i2++;
}

appData.moneyPerDay = appData.money / 30;

alert( `бюджет на 1 день: ${appData.moneyPerDay}` );
console.log( JSON.stringify( appData ) );

// if, else

if ( appData.moneyPerDay < 100 ) {
    console.log( `min: ${appData.moneyPerDay}` );
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log( `middle: ${appData.moneyPerDay}` );
} else if ( appData.moneyPerDay > 2000 ) {
    console.log( `max: ${appData.moneyPerDay}` );
} else {
    console.log( `Smth wrong` );
}

// switch

switch( appData.moneyPerDay ) {
    case ( appData.moneyPerDay < 100 ) : {
        console.log( `min: ${appData.moneyPerDay}` );
        break;
    }
    case ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) : {
        console.log( `middle: ${appData.moneyPerDay}` );
        break;
    }
    case ( appData.moneyPerDay > 2000 ) : {
        console.log( `max: ${appData.moneyPerDay}` );
        break;
    }
    default: {
        console.log( `Smth wrong` );
        break;
    }
}

