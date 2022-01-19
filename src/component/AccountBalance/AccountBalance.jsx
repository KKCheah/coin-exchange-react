import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    text-align: left;
    padding: 1.5rem 0 1.5rem 2rem;
`;

export default class AccountBalance extends Component {
    constructor(props){
        super(props);    
        this.handleShowBalance = this.handleShowBalance.bind(this)
    }
    
    render() {

        const buttonText = this.props.displayState ? "Hide Balance" : "Show Balance"
        let content = <>Balance: {this.props.currency}{this.props.amount}</>;
        let nullContent = null
        if (this.props.displayState) {
            console.log("displayState true")
        } else {
            content = nullContent
            console.log("displayState false")
        }
        return (
            <Section>
                <div className="account-balance">{content}</div>
                <button onClick={this.handleShowBalance}>{buttonText}</button>
            </Section>
        )
    }


    handleShowBalance(e){
       e.preventDefault();
       this.props.handleShowBalance(this.props.displayState);

       }
    }



AccountBalance.propTypes = {
        amount: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),

    currency: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}





