import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchValue: "",
  };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          transactions: data,
        })
      );
  }

  filterTransactions = () => {
    const input = this.state.searchValue.toLowerCase();
    console.log(input);
    const filteredTransactions = this.state.transactions.filter(
      (transaction) => {
        const description = transaction.description.toLowerCase();
        return description.includes(input);
      }
    );
    console.log(filteredTransactions);
    return filteredTransactions;
  };

  handleSearch = (searchValue) => {
    console.log(searchValue);
    this.setState({ searchValue: searchValue });
  };

  addNewTransaction = (newTransaction) => {
    const correctStructure = {
      date: newTransaction.date,
      description: newTransaction.description,
      category: newTransaction.category,
      amount: newTransaction.amount,
    };

    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(correctStructure),
    });
    this.setState({
      transactions: [...this.state.transactions, correctStructure],
    });
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
