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
    render() {

        const buttonText = this.props.showBalance ? "Hide Balance" : "Show Balance"

        return (
            <Section>
                <div className="account-balance">Balance: {this.props.currency} {this.props.amount}</div>
                <button onClick={this.handleShow}>{buttonText}</button>
            </Section>
        )
    }


    handleShow(e){
       e.preventDefault();
       this.props.handleShowBalance(this.props.showBalance)
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

