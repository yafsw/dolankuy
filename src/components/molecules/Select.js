import React, { memo } from 'react';
import Styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { secondary } from '../../config/color';
import P from "../atoms/P";

const Select = props => {
    return (
        <SelectStyle>
            <div>
                <P><b>{props.title}</b><MdKeyboardArrowDown className="arrow" /></P>
            </div>
            <P color="lightgrey">{props.selected}</P>
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