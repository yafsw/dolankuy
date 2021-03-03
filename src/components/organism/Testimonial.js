import React, { memo } from 'react';
import Styled from 'styled-components';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import { primary } from '../../config/color';

const Testimonial = () => {
    return(
        <TestimoialStyle>
            <div className="title">
                <div>
                    <H1>Testimonial</H1>
                    <P>What they says about our services</P>
                </div>
                <div>
                    <RiArrowLeftSLine className="arrow" />
                    <RiArrowRightSLine className="arrow" />
                </div>
            </div>  
        </TestimoialStyle>
    );
};

const TestimoialStyle = Styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2.4rem;

    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 128rem;

        p {
            margin-top: 1.2rem;
        }

        @media(max-width: 56rem) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            div:nth-child(2) {
                margin-top: 2.4rem;
            }
        }
    }

    .arrow {
        color: ${primary};
        font-size: 4rem;
    }
`;

export default memo(Testimonial);