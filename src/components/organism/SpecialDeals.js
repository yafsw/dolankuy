import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Button from '../atoms/Button';

const SpecialDeals = () => {
    return (
        <SpecialDealsStyle>
            <div className="title">
                <div>
                    <H1>Special Deals</H1>
                    <P>Get full package experience included with all of your needs on the trips</P>
                </div>
                <div>
                    <Button to="/special-deaals">View All Packages</Button>
                </div>
            </div>
        </SpecialDealsStyle>
    );
};

const SpecialDealsStyle = Styled.section`
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
`;

export default memo(SpecialDeals);