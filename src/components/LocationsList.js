import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';
export default function LocationList() {
    const [location, setLocation] = useState([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {

                const items = res.data;

                console.log(items)
                setLocation(res.data.results)
                console.log('response', res)

            });
    }, []);

    return (

        <div>
            {location.map(item => <LocationCard
                key={item.id}
                id={item.id}
                name={item.name}
                type={item.types}
                dimension={item.dimension}
                residents={item.residents} />
            )}
        </div>



    )

}


