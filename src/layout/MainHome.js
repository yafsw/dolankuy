import React, { memo } from 'react';
import Styled from 'styled-components';

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
    padding: 2.4rem;
`;

export default memo(MainHome);