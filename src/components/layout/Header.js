import React, { memo } from 'react';
import NavBar from '../organism/NavBar';
import Styled from "../organism/NavBar";

const Header = () => {
    return (
        <HeaderStyle>
            <NavBar />
        </HeaderStyle>
    );
};

const HeaderStyle = Styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    width: 100%;
`;

export default memo(Header);