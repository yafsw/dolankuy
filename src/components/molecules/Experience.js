import React, { memo } from 'react';
import Styled from 'styled-components';
import P from '../atoms/P';
import { secondary } from '../../config/color';

const Experience = props => {
    return (
        <ExperienceStyle>
            <div className="image">
                <img src={props.src} alt={props.src}/>
            </div>
            <div className="text">
                <b><P>{props.title}</P></b>
                <P color="grey">{props.description}</P>
            </div>
        </ExperienceStyle>
    );
};

const ExperienceStyle = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1.2rem;
    background-color: white;
    box-shadow: 0 1.5rem 4rem rgba(15,48,87,.1);
    border-radius: 1.4rem;
    width: 100%;

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.2rem;
        margin-right: 1.2rem;
        background-color: ${secondary};
        padding: 1.2rem;

        img {
            height: 4.8rem;
            width: 4.8rem;
        }
    }
`;

export default memo(Experience);