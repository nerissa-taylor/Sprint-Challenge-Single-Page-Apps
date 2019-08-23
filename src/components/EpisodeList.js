import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
function EpisodeList() {
    const [episodes, setEpisode] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
            .then(res => {
                const items = res.data;

                console.log(items)
                setEpisode(items)
                console.log('response', res)

            });
    }, []);

    return (
        <div className="item">
            {episodes.map(item => {
                return (
                    <EpisodeCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        air_date={item.air_date}
                        episode={item.episode} />
                );
            })}
        </div>
    );
}
export default EpisodeList;