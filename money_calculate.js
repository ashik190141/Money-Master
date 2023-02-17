document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income-field').value;
    const food = document.getElementById('food-field').value;
    const rent = document.getElementById('rent-field').value;
    const cloth = document.getElementById('cloths-field').value;

    const foodInt = parseInt(food);
    const incomeInt = parseInt(income);
    const rentInt = parseInt(rent);
    const clothInt = parseInt(cloth);

    if (isNaN(income)||isNaN(food)||isNaN(rent)||isNaN(cloth)) {
        alert("Please Enter Number");
    } else if (income == ' ' || food == ' ' || rent == ' ' || cloth == ' ') {
        alert("Enter All Input Field");
    } else if (incomeInt < 0 || foodInt < 0 || rentInt < 0 || clothInt < 0) {
        alert("Is not a valid number");
    }else {
        const totalExpense = foodInt + rentInt + clothInt;
        const balance = incomeInt - totalExpense;
        if (totalExpense > incomeInt) {
            alert("Your Total Income is less than your Total Expense");
        } else {
            const expenseId = document.getElementById('totalExpenses');
            expenseId.innerText = totalExpense;
            const balanceId = document.getElementById('totalBalance');
            balanceId.innerText = balance;
        }
    }
})

document.getElementById('savingButton').addEventListener('click', function () {
    const saveAmountId = document.getElementById('savingField').value;
    const saveAmountInt = parseFloat(saveAmountId);
    const balanceId = document.getElementById('totalBalance').innerText;
    const balanceInt = parseFloat(balanceId);
    const income = document.getElementById('income-field').value;
    const incomeInt = parseFloat(income);
    const savingAmount = incomeInt * (saveAmountInt / 100);
    if (isNaN(saveAmountInt)) {
        alert("Please Enter Valid Number");
    } else if (saveAmountId == ' ') {
        alert("Please Enter Saving Amount");
    } else if(saveAmountInt<0){
        alert("Please Enter Valid Number");
    } else if (savingAmount > balanceInt) {
        alert("You Do Not Save Money");
    } else {
        document.getElementById('amount').innerText = savingAmount;
        document.getElementById('remain').innerText = balanceInt - savingAmount;
    }
})