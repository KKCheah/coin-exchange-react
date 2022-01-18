import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


const fader = keyframes`
    from {transform: rotate(0deg);}
    to{transform: rotate(360deg);}
    `;

const Header1 = styled.header`
    background-color: #282c34;
    max-height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 30px;
    color: white;
`

const Title = styled.h1`
    background-color: #282c34;
    max-height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 30px;
    color: white;
`

const Logo = styled.img`
    height: 10rem;
    max-width: auto;
    transform: rotate(72deg);
    animation: 10s ${fader} alternate infinite;

`

const LogoAnimation = keyframes`

`


export default class Header extends Component {
    render() {
        return (
            <Header1 className="App-header">
                <Logo className="React-Logo" src= {logo} alt="React Logo"/>
                <Title>
                PhoenixXxplorer
                </Title>
                <h1>
                </h1>
            </Header1>
        )
    }
}
