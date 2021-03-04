import React, { memo } from 'react';
import Styled from 'styled-components';
import Foot from '../components/organism/Foot';
import { primary } from '../config/color';

const Footer = () => {
    return (
        <FooterStyle>
            <Foot />
        </FooterStyle>
    );
};

const FooterStyle = Styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2.4rem;
    background-image: linear-gradient(white, ${primary});
`;

export default memo(Footer);