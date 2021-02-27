import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Experience from '../molecules/Experience';

const Experiences = () => {
    return (
        <ExperiencesStyle>
            <div className="title">
                <H1>Explore Amazing Experiences</H1>
                <div className="description">
                    <P>Feel the exited activities on the way you’re going to trip, we have a lot of activities that you can explore with our professional guide</P>
                </div>
            </div>
            <div className="experiences">
                <Experience src="assets/icons/sun-umbrella.svg" title="Beach Activity" description="24 Properties" />
                <Experience src="assets/icons/bungee.svg" title="Bungee Jumping" description="24 Properties" />
                <Experience src="assets/icons/city.svg" title="City Tours" description="24 Properties" />
                <Experience src="assets/icons/hiking.svg" title="Hiking Trips" description="24 Properties" />
                <Experience src="assets/icons/mountains.svg" title="Mountain Bike" description="24 Properties" />
                <Experience src="assets/icons/scuba.svg" title="Scuba Diving" description="24 Properties" />
                <Experience src="assets/icons/hunting.svg" title="Hunting Trips" description="24 Properties" />
                <Experience src="assets/icons/sailing.svg" title="Sailing Trips" description="24 Properties" />
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
    padding: 2.4rem;

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

    .experiences {
        display: grid;
        grid-template-columns : repeat(auto-fill, minmax(28rem, 1fr));
        grid-auto-rows : 9.6rem;
        place-items: center;
        grid-gap: 2.4rem;
        margin-top: 2.4rem;
        width: 100%;
        max-width: 128rem;
    }

    .description {
        @media(max-width: 56rem) {
            margin-top: 1.2rem;
        }
    }
`;

export default memo(Experiences);