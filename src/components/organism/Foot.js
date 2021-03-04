import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';

const Foot = () => {
    return (
        <FootStyle>
            <H1>Subscribe to Get Special Price</H1>
            <P>Don’t wanna miss something? Subscribe now to get special promotion and monthly newsletter</P>
        </FootStyle>
    );
};

const FootStyle = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
`;

export default memo(Foot);