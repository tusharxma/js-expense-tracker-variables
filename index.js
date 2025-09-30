const userExpenses = [
    {
        expenseName: "Lunch",
        amount: 2000,
        expenseType: "Food"
    },
        {
        expenseName: "Movie",
        amount: 500,
        expenseType: "Entertainment"
    }
]

function addExpenses(expenses) {
    
    let totalExpense = 0;
    let breakdown = {};
    
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        totalExpense += expense.amount;
        breakdown[expense.expenseType] = (breakdown[expense.expenseType] || 0) + expense.amount;
        console.log(`Expense Added: ${expense.expenseName} - ${expense.amount}`);
    }
    
    console.log(`Total Spending : ${totalExpense}`);
    console.log(`Breakdown:`, breakdown);

}

addExpenses(userExpenses);