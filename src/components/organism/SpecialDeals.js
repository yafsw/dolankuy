import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Button from '../atoms/Button';
import Package from '../molecules/Package';

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
            <div className="packages">
                <Package                
                    location="Sumatera Barat, Indonesia"
                    name="Toba Lake "
                    src="assets/img/dio-hasibuan-9ZNhQZFivZc-unsplash.jpg"
                    price="1000"
                />
                <Package                
                    location="Sumatera Barat, Indonesia"
                    name="Toba Lake "
                    src="assets/img/dio-hasibuan-9ZNhQZFivZc-unsplash.jpg"
                    price="1000"
                />
                <Package                
                    location="Sumatera Barat, Indonesia"
                    name="Toba Lake "
                    src="assets/img/dio-hasibuan-9ZNhQZFivZc-unsplash.jpg"
                    price="1000"
                />
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

    .packages {
        display: grid;
        grid-template-columns : repeat(auto-fill, minmax(38rem, 1fr));
        grid-auto-rows : 40.6rem;
        place-items: center;
        grid-gap: 2.4rem;
        margin-top: 2.4rem;
        width: 100%;
        max-width: 128rem;
    }
`;

export default memo(SpecialDeals);