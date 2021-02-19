import React, { memo } from 'react';
import Styled from 'styled-components';

const Span = props => {
    return (
        <SpanStyle color={props.color} align={props.align}>
            {props.children}
        </SpanStyle>
    );
};

const SpanStyle = Styled.p`
    font-size: 1.6rem;
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default memo(Span);