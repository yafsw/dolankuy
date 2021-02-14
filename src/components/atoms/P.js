import React, { memo } from 'react';
import Styled from 'styled-components';

const P = props => {
    return (
        <PStyle white={props.white}>
            {props.children}
        </PStyle>
    );
};

const PStyle = Styled.p`
    font-size: 1.6rem;
    color: ${props => props.white ? 'white' : 'black'};
    text-align: ${props => props.align ? props.align : 'left'};
    line-height: 1.5;
`;

export default memo(P);