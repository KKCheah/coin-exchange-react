import React, { Component } from 'react'
import Coin from '../Coin/Coin.jsx';
import styled from 'styled-components'

const CoinHeader = styled.table`
  margin: 30px;
  display: inline-table;
  font-size: 3.5rem;
`

const TableHeader= styled.tr`
  font-size: 1.25rem;
`

const TableHorizontal = styled.th`
  border: 1px solid ;
  width: 40vh ; 
`


export default class CoinList extends Component {
    render() {
        return (
        <CoinHeader>
          <thead>
            <TableHeader>
              <TableHorizontal>Name</TableHorizontal>
              <TableHorizontal>Ticker</TableHorizontal>
              <TableHorizontal>Balance</TableHorizontal>
              <TableHorizontal>Price</TableHorizontal>
              <TableHorizontal>Refresh Button</TableHorizontal>
            </TableHeader>
          </thead>
          <tbody>
            { 
              this.props.data.map(value=>(<Coin key = {value.ticker}
              handleRefresh={this.props.handleRefresh}
              displayState = {this.props.displayState} 
              name={value.name} 
              balance={value.balance} 
              ticker={value.ticker} 
              price={value.price}/>))
            }
          </tbody>
        </CoinHeader>
        )
    }
}
