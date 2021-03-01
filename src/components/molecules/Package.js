import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import P from '../atoms/P';

const Package = props => {
    return (
        <PackageStyle>
            <small>
                <P color="grey">{props.location}</P>
            </small>
            <b>
                <P>{props.name}</P>
            </b>
            <div className="image">
                <img src={props.src} alt={props.src} />
            </div>
            <div className="avaibility">
                <P>{props.price}/Person</P>
                <Button to="/avaibility">View Availabillity</Button>
            </div>
        </PackageStyle>
    );
};

const PackageStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0 1.5rem 4rem rgba(15,48,87,.1);
    border-radius: 1.4rem;

    .image {
        width: 100%;
        border-radius: 1.2rem;
        display: flex;
        jstify-content: center;
        align-items: center;
        overflow: hidden;

        img {
            height: 100%;
        }
    }

    .avaibility {
        display: flex;
        flex-directio: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export default memo(Package);