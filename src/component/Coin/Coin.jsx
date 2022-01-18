import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    font-size: 20px;
    border: 1px solid white;
    width: 60vh;
`;


export default class Coin extends Component {
    constructor(props){
        super(props);    
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>{this.props.balance}</Td>
                <Td>$ {this.props.price}</Td>
                <Td>
                    <form action="#" method="POST">  
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        );
    }


    handleClick(e) {
        // Prevent default action of submitting the form
        e.preventDefault();
        this.props.handleRefresh(this.props.ticker)
        /*
        const randomPercentage = 0.99515 + Math.random() * 0.01 

        this.setState(function(oldState){
            return {
                price : oldState.price * randomPercentage 
                
            };
        });
        */
    }

 /* 
    componentDidMount(){
        const callback = () => {
            //set a state to a random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            //Don't do this (state is not meant to be exposed or at LHS)
            //this.state.price = this.state.price * randomPercentage

            //Do this instead (use this.setState)
            this.setState(function (oldState){
                return {
                    price: oldState.price * randomPercentage
                };
            } );
        }
        //setInterval(callback, 1000)
    }   
 */
/*
    componentDidMount(){
        const callback = () => {
            //set a state to a random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            //Don't do this (state is not meant to be exposed or at LHS)
            //this.state.price = this.state.price * randomPercentage

            //Do this instead (use this.setState)
            this.setState(function(oldState){
                return {
                    price: oldState.price * randomPercentage
                };
            } );
        }
        setInterval(callback, 1000)
    }
*/
    /*
    componentDidMount() {
        const callback = () => {
            //set the state to a new random value
            const randomPercentage = 0.99515 + Math.random() * 0.01;
            //Don't do this
            //this.state.price = this.state.price + randomPercentage;
            
            //Set a state
            this.setState(function(oldState){
                return {
                    price : oldState.price * randomPercentage 
                };
            });

            //or

            //this.setState({price : oldState.price * randomPercentage})
        
        }
        setInterval(callback, 1000);
    }
    */


    

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    
    price: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
    
}







