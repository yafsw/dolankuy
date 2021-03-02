import React, { memo } from 'react';
import Styled from 'styled-components';

const H3 = props => {
    return (
        <H3Style color={props.color} align={props.align}>
            {props.children}
        </H3Style>
    );
};

const H3Style = Styled.h3`
    font-size: 2.4rem;
    color: ${props => props.color ? props.color : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
    line-height: 1.2;
    max-width: 38rem;
`;

export default memo(H3);