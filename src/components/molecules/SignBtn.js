import React, { memo } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../atoms/Span';
import Button from '../atoms/Button';

const SignBtn = props => {
    return (
        <SignBtnStyle>
            <Link to="/signin">
                <Span color={props.color}>Sign In</Span>
            </Link>
            <Button to="/signup" colot={props.color}>Sign Up</Button>
        </SignBtnStyle>
    );
};

const SignBtnStyle = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;

    @media(max-width: 48rem) {
        flex-direction: column;
        align-items: flex-start;
    }

    a {
        text-decoration: none;

        &:nth-child(2) {    
            margin-left: 2.4rem;
            
            @media(max-width: 48rem) {
                margin-left: 0;
                margin-top: 1.2rem;
            }
        }
    }
`;

export default memo(SignBtn);