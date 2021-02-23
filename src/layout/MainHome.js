import React, { memo } from 'react';
import Styled from 'styled-components';
import Heading from '../components/organism/Heading';

const MainHome = () => {
    return (
        <MainHomeStyle>
            <Heading />
        </MainHomeStyle>
    );
};

const MainHomeStyle = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default memo(MainHome);