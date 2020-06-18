const user = {
    name: "Caique",
    transactions: [],
    balance: 0
}

// Adicionar transações por meio de OBJETOS

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        return user.balance += transaction.value
    } else if (transaction.type == 'debit') {
        return user.balance -= transaction.value
    }
}

/* ADICIONANDO TRANSAÇÕES */
createTransaction({
    type: 'credit',
    value: 70
})
createTransaction({
    type: 'debit',
    value: 90
})

createTransaction({
    type: 'debit',
    value: 180
})

createTransaction({
    type: 'credit',
    value: 400
})


// RELATÓRIOS 

function getHigherTransactionByType(type) {
    let higherTransaction
    let maior = 0
    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > maior) {
            maior = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction,
        console.log(higherTransaction)
}

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')


// Valor médio das transações de um usuário independente do tipo
function getAverageTransactionValue(users) {
    let sum = 0
    for (let i = 0; i < users.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    const average = sum / users.transactions.length
    return average,
        console.log(average)
}

getAverageTransactionValue(user)


// Return QUANTIDADE de transações de cada tipo (credit/debit)
// { credit: x, debit: y}
function getTransactionsCount() {
    let transactionCount = {
        credit: 0,
        debit: 0
    }
    for (transaction of user.transactions) {
        if (transaction.type == 'credit') {
            transactionCount.credit++
        } else if (transaction.type == 'debit') {
            transactionCount.debit++
        }
    }
    return transactionCount,
        console.log(transactionCount)
}

getTransactionsCount()