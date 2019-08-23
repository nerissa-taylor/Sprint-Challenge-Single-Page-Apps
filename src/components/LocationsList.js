import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

const [locations, setLocation] = useState([]);
useEffect(() => {

    axios.get('')
        .then(res => {
            const items = response.data;

            console.log(items)
            setLocation(items)
            console.log('response', res)

        });
}, []);

return (
    <div className="item">
        {items.map(item => {
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
