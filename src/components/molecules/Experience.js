import React, { memo } from 'react';
import Styled from 'styled-components';
import P from '../atoms/P';

const Experience = props => {
    return (
        <ExperienceStyle>
            <div className="image">
                <img src={props.src} alt={props.src}/>
            </div>
            <div className="text">
                <b><P>{props.title}</P></b>
                <P>{props.description}</P>
            </div>
        </ExperienceStyle>
    );
};

const ExperienceStyle = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius; 1.4rem;
    padding: 1,2remm;

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 78rem;
        width: 78rem;
        border-radius: 1.2rem;
        margin-right: 1.2rem;
    }
`;

export default memo(Experience);