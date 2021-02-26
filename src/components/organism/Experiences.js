import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';

const Experiences = () => {
    return (
        <ExperiencesStyle>
            <div className="title">
                <H1>Explore Amazing Experiences</H1>
                <P>Feel the exited activities on the way you’re going to trip, we have a lot of activities that you can explore with our professional guide</P>
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
    max-width: 

    .title {
        display: flex;
        flex-direction: row;
        justfy-content: space-between;
        align-items: center;
    }
`;

export default memo(Experiences);