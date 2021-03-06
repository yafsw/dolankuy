import React, { memo } from 'react';
import Styled from 'styled-components';

const Input = props => { 
    return (
        <InputStyle
            type={props.type}
            value={props.vaue}
            placeholder={props.placeholder}
        />
    );
};

const InputStyle = Styled.input`

`;

export default memo(Input);