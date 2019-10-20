import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import ball from "../assets/images/ball.png";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <Bounce><img src={ball} alt="ball"/></Bounce>
        );
    }
}