import React from 'react';

export default function EpisodeCard(props) {

    return (
        <div>
            <h2>Episode: {props.name}</h2>

            <p>Air Date: {props.air_date}</p>
            <p>{props.episode}</p>
        </div>
    )
}