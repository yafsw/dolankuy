import React, { memo } from 'react';
import Styled from 'styled-components';
import Menu from '../molecules/Menu';
import SignBtn from '../molecules/SignBtn';

const Bar = () => {
    return (
        <BarStyle>
            <Menu />
            <SignBtn />
        </BarStyle>
    );
};

const BarStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-coontent: center;
    align-items: center;
    width: 100%;
`;

export default memo(Bar);