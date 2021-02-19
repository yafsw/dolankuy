import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import Select from '../molecules/Select';

const Explore = () => {
    return (
        <ExploreStyle>
            <div>
                <Select title="Location" selected="Enter your destination" />
                <Select title="Date" selected="Set your date" />
                <Select title="People" selected="Enter your people" />
            </div>
            <Button>
                Explore
            </Button>
        </ExploreStyle>
    );
};

const ExploreStyle = Styled.div`
    display: flex;
    justify-content: center;
    alihn-items: center;
    padding: 1.2rem;
    border-radius: 1rem;
`;

export default memo(Explore);