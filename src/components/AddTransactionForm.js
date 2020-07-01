import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amounnt: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={() => {
            this.props.addNewTransaction(this.state);
          }}
          className="ui form"
        >
          <div className="inline fields">
            <input onChange={this.handleInputChange} type="date" name="date" />
            <input
              onChange={this.handleInputChange}
              type="text"
              name="description"
              placeholder="Description"
            />
            <input
              onChange={this.handleInputChange}
              type="text"
              name="category"
              placeholder="Category"
            />
            <input
              onChange={this.handleInputChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
