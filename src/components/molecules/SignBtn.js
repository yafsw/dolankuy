import React, { memo } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../atoms/Span';
import Button from '../atoms/Button';

const SignBtn = props => {
    return (
        <SignBtnStyle>
            <Link to="/signin">
                <Span colot={props.color}>Sign In</Span>
            </Link>
            <Link to="/signup">
                <Button colot={props.color}>Sign Up</Button>
            </Link>
        </SignBtnStyle>
    );
};

const SignBtnStyle = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;

    a {
        text-decoration: none;

        &:nth-child(2) {    
            margin-left: 1.2rem;
            padding: .6rem 1.8rem;
        }
    }
`;

export default memo(SignBtn);