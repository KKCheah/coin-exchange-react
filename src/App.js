import './component/Coin/Title.jsx';
import Greetings from './component/Coin/Title.jsx';
import AccountBalance from './component/AccountBalance/AccountBalance.jsx'
import './component/AccountBalance/AccountBalance.css';
import CoinList from './component/CoinList/CoinList.jsx';
import React from 'react';
import Header from './component/Header/Header.jsx';
import styled from 'styled-components';

const AppStyle = styled.div`
  text-align: center;
  background-color:rgb(15, 75, 155);
  color: #e7e7e7;

`

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        balance: 10000,
        data: [
          {
            name:"Phoenixxxx",
            ticker:"PHNXN",
            balance: 30000,
            price:1
          }, 
          {
            name:"Bitcoin",
            ticker:"BTC",
            balance: 0.5,
            price:60000
          }, 

          {
            name:"Ethereum",
            ticker:"ETH",
            balance: 32,
            price:10000
          }, 

          {
            name:"Cardano",
            ticker:"ADA",
            balance: 1000,
            price:5
          }, 

          {
            name:"USD Circle",
            ticker:"USDC",
            balance: 100,
            price:1
          }
        ] 
    }
    this.handleRefresh = this.handleRefresh.bind(this); 
  }

  handleRefresh(valueChangeTicker){
    const coinDisplay = this.state.data.map(({ticker,price,name,balance}) => {
      let newPrice = price;

      if (valueChangeTicker === ticker) {
        const randomPercentage = 0.99515 + Math.random() * 0.01
        newPrice = newPrice * randomPercentage;
      }
      
      return {
        name,
        ticker,
        balance,
        price: newPrice
      }

      
    });

    this.setState({data: coinDisplay});
    


  }

  render(){
    return (
      <AppStyle>
        <title><Greetings/></title>
        <Header/>
        <AccountBalance currency="U$D" amount={this.state.balance} showBalance={true}/>
        <CoinList data={this.state.data} handleRefresh={this.handleRefresh}/>
      </AppStyle>
    );
  }

  handleShowBalance(showingBalance) {
    const coinDisplay = this.state.data.map(({ticker,price,name,balance}) => {
      let newPrice = price;

      if (showingBalance === ticker) {
        const randomPercentage = 0.99515 + Math.random() * 0.01
        newPrice = newPrice * randomPercentage;
      }
      
      return {
        name,
        ticker,
        balance,
        price: newPrice
      }

      
    });
  
    this.setState({data: coinDisplay});

  }}
  
export default App;
