import React, { useEffect, useState } from 'react'
import "./styles.css"

export const RickMortyAPI = () => {
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results);
            setInfoData(data.results);
        };
        fetchData();
    },[])





  return (
    <div>
        <h2>RickMortyAPI</h2>
        <div className='card'>
            {
                infoData.map(info =>(
                    <div key={info.id}>
                        <p>{info.name}</p>
                        <img src={info.image} alt='photo'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
