import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import Select from '../molecules/Select';

const Explore = () => {
    return (
        <ExploreStyle>
            <div className="selects">
                <div className="select">
                    <Select title="Location" selected="Enter your destination" />
                </div>
                <div className="select">
                    <Select title="Date" selected="Set your date" />
                </div>
                <div className="select">
                    <Select title="People" selected="Enter your people" />
                </div>
            </div>
            <Button to="/explore">
                Explore
            </Button>
        </ExploreStyle>
    );
};

const ExploreStyle = Styled.div`
    display: flex;
    justify-content: center;
    alihn-items: center;
    padding: 1.2rem 1.2rem 1.2rem 2.4rem;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 4rem rgba(15,48,87,.1);
    background-color: white;

    @media(max-width: 48rem) {
        flex-direction: column;
        padding: 1.2rem;
        width: 100%;
    }

    .selects {
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width: 48rem) {
            flex-direction: column;
            width: 100%;
            align-items: flex-start;
        }
    }

    .select {
        margin-right: 2.4rem;

        @media(max-width: 48rem) {
            margin: 0 1.2rem 1.2rem 1.2rem;
        }
    }
`;

export default memo(Explore);