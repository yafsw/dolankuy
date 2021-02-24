import React, { memo } from 'react';
import Styled from 'styled-components';
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";
import SignBtn from "../molecules/SignBtn";
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { useApp } from '../../context';

const NavBar = props => {
    const { state, action } = useApp();

    return (
        <NavBarStyle>
            <Logo color={props.color} />
            <div className="desktop">
                <Menu color={props.color} />
            </div>
            <div className="desktop">
                <SignBtn color={props.color} />
            </div>
            <div className="mobile" onClick={action.handleBar}>
                {state.bar ? <IoClose className="handle" color={props.color} /> : <IoMenu className="handle" color={props.color} />}
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

    .handle {
        font-size: 4rem;
        color: black;
        color: ${props => props.color ? props.color : 'black'}:
    }
`;

export default memo(NavBar);