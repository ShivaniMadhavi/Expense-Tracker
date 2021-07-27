import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        amount: "",
        totalamount:0,
        transactions:[],
        errorMsg:""
    };
  }

  onAdd =()=>{
    if(this.state.amount)
    {
      var data={
        date:new Date().toISOString(),
        amount:this.state.amount,
        type:"Add"
      }
  
      let  totalamount= Number(this.state.totalamount) + Number(this.state.amount)
      this.setState(previousState => ({
        transactions: [...previousState.transactions, data],
        totalamount:totalamount,
        amount:""
      }));

    }
    else
    {
      this.setState({
        errorMsg:"Please Enter Amount"
      })
    }
  }

  onRemove = () => {
    if(this.state.amount)
    {
      var data={
        date:new Date().toISOString(),
        amount:this.state.amount,
        type:"Remove"
      }
      let totalamount = Number(this.state.totalamount) - Number(this.state.amount)
      this.setState(previousState => ({
        transactions: [...previousState.transactions, data],
        totalamount:totalamount,
        amount:""
      }));
    }
    else
    {
      this.setState({
        errorMsg:"Please Enter Amount"
      })

    }
  }

  onChange =(e)=>{
    this.setState({
      amount:e.target.value,
      errorMsg:""
    })
  }

  render()
  {
    const {transactions}=this.state
    const TransactionHistory = transactions.map((data,index) => <p key={index}>{data.date +" - "+data.amount+" - "+data.type}</p>);

    return (
      <div className="App">
        <h1>Expense Tracker - Basic</h1>
          <div id="outer-div">
            <div id="inner-div">
              <label>Balance : {this.state.totalamount}</label><br/>
              <input type="number" name="amount" onChange={this.onChange} value={this.state.amount}/><br/>
              <button onClick={this.onAdd}>Add</button> <button onClick={this.onRemove}>Remove</button><br/>
              <label className="errorMsg">{this.state.errorMsg}</label>
            </div>
          </div>

          <div id="outer-div">
            <div  className="transactionHistory">
              <b>Transactions : </b>
              {TransactionHistory}
            </div>
          </div>
        
      </div>
    );
  }
 
}

export default App;



