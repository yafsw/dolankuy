import React, { memo } from 'react';
import Styled from 'styled-components';
import Button from '../atoms/Button';
import P from '../atoms/P';
import H3 from '../atoms/H3';
import { primary } from '../../config/color';
import { IoLocationSharp, IoCompass, IoCalendarSharp } from 'react-icons/io5';
import { RiFootprintFill } from 'react-icons/ri';

const Package = props => {
    return (
        <PackageStyle>
            <div className="text-icon">
                <IoLocationSharp className="icon"/>
                <P color="grey">{props.location}</P>
            </div>
            <div className="name">
                <b>
                    <H3>{props.name}</H3>
                </b>
            </div>
            <div className="image">
                <img src={props.src} alt={props.src} />
            </div>
            <div className="contents">
                <div className="text-icon">
                    <RiFootprintFill className="icon" />
                    <P color="grey">10 Activities</P>
                </div>
                <div className="text-icon">
                    <IoCompass className="icon" />
                    <P color="grey">10 Places</P>
                </div>
                <div className="text-icon">
                    <IoCalendarSharp className="icon" />
                    <P color="grey">1 Week</P>
                </div>
            </div>
            <div className="avaibility">
                <P>${props.price}/Person</P>
                <Button to="/avaibility">View Availabillity</Button>
            </div>
        </PackageStyle>
    );
};

const PackageStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    box-shadow: 0 1.5rem 4rem rgba(15,48,87,.1);
    border-radius: 1.4rem;
    padding: 2.4rem;

    .image {
        width: 100%;
        border-radius: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 18rem;

        img {
            height: auto;
            width: 100%;
        }
    }

    .avaibility {
        display: flex;
        flex-directio: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }   

    .text-icon {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 1.2rem;
    }

    .icon {
        color: ${primary};
        font-size: 2rem;
        margin-right: .6rem
    }

    .contents {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1.2rem 0;
        width: 100%;
    }

    .name {
        margin: 1.2rem 0;
    }
`;

export default memo(Package);