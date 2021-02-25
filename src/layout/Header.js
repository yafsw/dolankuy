import React, { memo } from 'react';
import NavBar from '../components/organism/NavBar';
import Bar from '../components/organism/Bar';
import Styled from 'styled-components';

const Header = props => {
    return (
        <HeaderStyle background={props.background}>
            <NavBar color={props.color} />
            <Bar color={props.color} />
        </HeaderStyle>
    );
};

const HeaderStyle = Styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 2.4rem;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${props => props.background ? props.background : 'white'};
`;

export default memo(Header);