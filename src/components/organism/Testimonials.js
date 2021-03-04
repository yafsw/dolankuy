import React, { memo } from 'react';
import Styled from 'styled-components';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import { primary } from '../../config/color';
import Testimonial from '../molecules/Testimonial';

const Testimonials = () => {
    return(
        <TestimonialsStyle>
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
            <div className="testimonials">
                <Testimonial
                    text="Consectetur adipiscing elit. Ut viverra scelerisque dui id ornare. Phasellus purus nibh, eleifend et ullamcorper ac, iaculis in turpis. Quisque ex velit, dapibus quis laoreet quis, aliquet vel diam. Quisque ex velit, dapibus quis laoreet quis, aliquet vel diam."
                    name="Anya Berlian"
                    status="Teacher"
                    src="assets/img/dan-ROJFuWCsfmA-unsplash.jpg"
                />
                <Testimonial
                    text="Consectetur adipiscing elit. Ut viverra scelerisque dui id ornare. Phasellus purus nibh, eleifend et ullamcorper ac, iaculis in turpis. Quisque ex velit, dapibus quis laoreet quis, aliquet vel diam. Quisque ex velit, dapibus quis laoreet quis, aliquet vel diam."
                    name="Anya Berlian"
                    status="Teacher"
                    src="assets/img/dan-ROJFuWCsfmA-unsplash.jpg"
                />
                <Testimonial
                    text="Consectetur adipiscing elit. Ut viverra scelerisque dui id ornare. Phasellus purus nibh, eleifend et ullamcorper ac, iaculis in turpis. Quisque ex velit, dapibus quis laoreet quis, aliquet vel diam. Quisque ex velit, dapibus quis laoreet quis, aliquet vel diam."
                    name="Anya Berlian"
                    status="Teacher"
                    src="assets/img/dan-ROJFuWCsfmA-unsplash.jpg"
                />
            </div>
        </TestimonialsStyle>
    );
};

const TestimonialsStyle = Styled.section`
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

    .testimonials {
        display: grid;
        grid-template-columns : repeat(auto-fill, minmax(38rem, 1fr));
        grid-auto-rows : 28rem;
        place-items: center;
        grid-gap: 2.4rem;
        margin-top: 2.4rem;
        width: 100%;
        max-width: 128rem;

        @media(max-width: 28rem) {
            grid-auto-rows : 36rem;
            grid-template-columns: 1fr;
        }
    }
`;

export default memo(Testimonials);