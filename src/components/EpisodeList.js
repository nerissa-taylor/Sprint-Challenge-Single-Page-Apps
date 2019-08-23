import React from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

const [episode, setEpisode] = useState([];

useEffect(() => {
    axios.get('')
        .then(res => {
            const items = response.data;

            console.log(items)
            setEpisode(items)
            console.log('response', res)

        });
}, []);

return (
    <div className="item">
        {items.map(item => {
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
export default EpisodeList;