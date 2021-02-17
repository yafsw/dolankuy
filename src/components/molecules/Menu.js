import React, { memo } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import P from '../atoms/P';

const Menu = props => {
    return (
        <MenuStyle>
            <Link to="/explore">
                <P color={props.color}>Explore</P>
            </Link>
            <Link to="/special-deals">
                <P color={props.color}>Special Deals</P>
            </Link>
            <Link to="testimonial">
                <P color={props.color}>Testimonial</P>
            </Link>
        </MenuStyle>
    );
};

const MenuStyle = Styled.div`
    display: flex;
    flex-direction: row;
    flax-wrap: no-wrap;
    justify-content: center;
    align-items: center;

    @media(max-width: 48rem) {
        flex-direction: column;
    }

    a {
        text-decoration: none;

        &:nth-child(2) {
            margin: 0 1.2rem;

            @media(max-width: 48rem) {
                margin: 1.2rem 0;
            }
        }
    }
`;

export default memo(Menu);