import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

const [locations, setLocation] = useState([]);
useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
            const items = res.data;

            console.log(items)
            setLocation(items)
            console.log('response', res)

        });
}, [locations]);

return (
    <div className="item">
        {locations.map(item => {
            return (
                <LocationCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type={item.types}
                    dimension={item.dimension}
                    residents={item.residents} />
            );
        })}
    </div>
);
