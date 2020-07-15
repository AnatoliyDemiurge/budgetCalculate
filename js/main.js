
let startBtn = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.getElementById('sum'),
  percentValue = document.getElementById('percent'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  incomeItem = document.querySelector('.choose-income'),

  buttons = document.getElementsByTagName('button'),
  expensesItem = document.querySelectorAll('.expenses-item'),
  expensesItemBtn = document.querySelector('.expenses-item-btn'),
  optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
  count = document.querySelector('.count-budget-btn'),
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  btn = document.getElementsByTagName('button'),
  btnExpensesOptional = btn[1];
let money, time;

startBtn.addEventListener('click',function(){
    
    time = prompt ('Введите дату в формате YYYY-MM-DD','');
    money = +prompt('Ваш бюджет на месяц?','');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?','');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click',function(){
    let sum = 0;

    for (let i = 0;i < expensesItem.length;i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( (typeof(a)) ==='string' && (typeof(a)) != null  && (typeof(b)) != null
            && a != ''  && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

btnExpensesOptional.addEventListener('click', function(){
    for (let i = 0; i <= optionalExpensesItem.length;i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

count.addEventListener('click',function(){
    if( appData.budget != undefined ) {

        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
          levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
          levelValue.textContent = "Это высокий уровень достатка!";
        } else {
          levelValue.textContent = "Произошла ошибка";
        }
      } else {
        dayBudgetValue.textContent = "Произошла ошибка";
      }
});
//также вместо события input можно использовать change
incomeItem.addEventListener('input',function (){
    let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click',function(){
    if (appData.savings == true) {
    appData.savings = false;
    } else{
    appData.savings = true;
    }
});

sumValue.addEventListener('input',function(){
    if (appData.savings == true) {
        let sum =+ sumValue.value,
            percent =+percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input',function(){
    if (appData.savings == true) {
        let sum =+ sumValue.value,
            percent =+percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings:false
};

