import React, { memo } from 'react';
import Styled from 'styled-components';
import Menu from '../molecules/Menu';
import SignBtn from '../molecules/SignBtn';
import { useApp } from '../../context';

const Bar = () => {
    const { state } = useApp();

    return (
        <BarStyle show={state.bar}>
            <div>
                <Menu />
                <SignBtn />
            </div>
        </BarStyle>
    );
};

const BarStyle = Styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    justify-coontent: center;
    align-items: flex-start;
    width: 100%;

    @media(min-width: 48rem) {
        display: none;
    }

    div {
        margin-top: 1.2rem;
        width: 100%;
    }
`;

export default memo(Bar);