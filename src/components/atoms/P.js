import React, { memo } from 'react';
import Styled from 'styled-components';

const P = props => {
    return (
        <PStyle color={props.color} align={props.align}>
            {props.children}
        </PStyle>
    );
};

const PStyle = Styled.p`
    font-size: 1.6rem;
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
    line-height: 1.5;
    max-width: 38rem;
`;

export default memo(P);