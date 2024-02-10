import React, { useEffect, useState } from 'react'

export const RickMortyAPI = () => {
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results);
        };
        fetchData();
    },[])





  return (
    <div>
        <h2>RickMortyAPI</h2>
    </div>
  )
}
