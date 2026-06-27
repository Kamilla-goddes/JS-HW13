const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
  
    createTransaction(amount, type) {
      const transaction = {
        id: Date.now(),
        amount: amount,
        type: type,
      };
  
      this.transactions.push(transaction);
    },
  
    deposit(amount) {
      this.balance = this.balance + amount;
      this.createTransaction(amount, Transaction.DEPOSIT);
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Недостатньо коштів');
      } else {
        this.balance = this.balance - amount;
        this.createTransaction(amount, Transaction.WITHDRAW);
      }
    },
  
    getBalance() {
      console.log(this.balance);
    },
  
    getTransactionDetails(id) {
      const transaction = this.transactions.find((item) => item.id === id);
  
      if (transaction) {
        console.log(transaction);
      } else {
        console.log('Транзакцію не знайдено');
      }
    },
  
    getTransactionTotal(type) {
      let total = 0;
  
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type === type) {
          total = total + this.transactions[i].amount;
        }
      }
  
      console.log(total);
    },
  };