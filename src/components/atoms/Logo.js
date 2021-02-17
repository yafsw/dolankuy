import React, { memo } from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom'

const Logo = props => {
    return (
        <LogoStyle to="/">
            Dolankuy
        </LogoStyle>
    );
};

const LogoStyle = Styled(Link)`
    font-size: 2.8rem;
    color: ${props => props.color ? props.color : 'black'};
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
`;

export default memo(Logo);