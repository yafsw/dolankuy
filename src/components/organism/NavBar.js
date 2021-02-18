import React, { memo } from 'react';
import Styled from 'styled-components';
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";
import SignBtn from "../molecules/SignBtn";
import { IoMenu } from 'react-icons/io5';

const NavBar = () => {
    return (
        <NavBarStyle>
            <Logo />
            <div className="desktop">
                <Menu />
            </div>
            <div className="desktop">
                <SignBtn />
            </div>
            <div className="mobile">
                <IoMenu className="menu" />
            </div>
        </NavBarStyle>
    );
};

const NavBarStyle = Styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 128rem;

    .desktop {
        display: flex;
        justify-content: center;
        align items: center;

        @media(max-width: 48rem) {
            display: none;
        }
    }

    .mobile {
        display: none;
        justify-content: center;
        align-items: center;

        @media(max-width: 48rem) {
            display: flex;
        }
    }

    .menu {
        font-size: 4rem;
        color: black;
    }
`;

export default memo(NavBar);