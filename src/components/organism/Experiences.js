import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';

const Experiences = () => {
    return (
        <ExperiencesStyle>
            <div className="title">
                <H1>Explore Amazing Experiences</H1>
                <div className="description">
                    <P>Feel the exited activities on the way you’re going to trip, we have a lot of activities that you can explore with our professional guide</P>
                </div>
            </div>
        </ExperiencesStyle>
    );
};

const ExperiencesStyle = Styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4.8rem 2.4rem;

    .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 128rem;

        @media(max-width: 56rem) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .description {
        margin-top: 1.2rem;
    }
`;

export default memo(Experiences);