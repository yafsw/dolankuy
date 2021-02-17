import React, { memo } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary } from '../../config/color';

const Button = props => {
    return (
        <ButtonStyle to={props.to}>
            {props.children}
        </ButtonStyle>
    );
};

const ButtonStyle = Styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem 4.8rem;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 2rem;
    text-decoration: none;
    background-color: ${primary};
`;

export default memo(Button);