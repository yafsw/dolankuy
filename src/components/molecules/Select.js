import React, { memo } from 'react';
import Styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { secondary } from '../../config/color';
import Span from "../atoms/Span";

const Select = props => {
    return (
        <SelectStyle>
            <div>
                <b><Span>{props.title}<MdKeyboardArrowDown className="arrow" /></Span></b>
            </div>
            <Span color="lightgrey">{props.selected}</Span>
        </SelectStyle>
    );
};

const SelectStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .arrow {
        font-size: 2rem;
        color: ${secondary}
    }
`;

export default memo(Select);