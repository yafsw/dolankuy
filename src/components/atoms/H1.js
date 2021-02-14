import React, { memo } from 'react';
import Styled from 'styled-components';

const H1 = props => {
    return (
        <H1Style white={props.white} align={props.align}>
            {props.children}
        </H1Style>
    );
};

const H1Style = Styled.h1`
    font-size: 4.2rem;
    color: ${props => props.white ? 'white' : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
    line-height: 1.2;
`;

export default memo(H1);