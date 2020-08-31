
export const getAllExpense = (expense) => {
    return expense;
}

export const getTotalExpense = (expense) => {
    const total = expense.reduce((acc, current) => {
        return acc += parseFloat(current.amount)
    },0);
    
    return total;
}