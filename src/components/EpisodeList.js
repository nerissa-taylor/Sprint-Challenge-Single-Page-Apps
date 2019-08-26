import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
function EpisodeList() {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')



            .then(res => {

                const items = res.data;

                console.log(items)
                setEpisode(res.data.results)
                console.log('response', res)

            });
    }, []);

    return (

        <div>
            {episode.map(item => <EpisodeCard
                item={item}
                key={item.id}
                name={item.name}
                airdate={item.air_date}
                episode={item.episode} />
            )}
        </div>



    )

}


export default EpisodeList;