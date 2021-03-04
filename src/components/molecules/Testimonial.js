import React, { memo } from 'react';
import Styled from 'styled-components';
import P from '../atoms/P';

const Testimonial = props => {
    return (
        <TestimonialStyle>
            <div>
                <P>{props.text}</P>
            </div>
            <div>
                <div>
                    <img src={props.src} alt={props.alt} />
                </div>
                <div>
                    <b><P>{props.name}</P></b>
                    <P>{props.status}</P>
                </div>
            </div>
        </TestimonialStyle>
    );
};

const TestimonialStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    box-shadow: 0 1.5rem 4rem rgba(15,48,87,.1);
    border-radius: 1.4rem;
    padding: 2.4rem;
    height: 28rem;

    div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;

        div:first-child {
            margin-right: 1.2rem;
            border-radius: 5rem;
            height: 5rem;
            width: 5rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 100%;
            }
        }

        div:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    }
`;

export default memo(Testimonial);