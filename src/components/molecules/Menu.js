import React, { memo } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../atoms/Span';

const Menu = props => {
    return (
        <MenuStyle>
            <Link to="/explore">
                <Span color={props.color}>Explore</Span>
            </Link>
            <Link to="/special-deals">
                <Span color={props.color}>Special Deals</Span>
            </Link>
            <Link to="testimonial">
                <Span color={props.color}>Testimonial</Span>
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
        align-items: flex-start;
    }

    a {
        text-decoration: none;

        &:nth-child(2) {
            margin: 0 2.4rem;

            @media(max-width: 48rem) {
                margin: 1.2rem 0;
            }
        }
    }
`;  

export default memo(Menu);