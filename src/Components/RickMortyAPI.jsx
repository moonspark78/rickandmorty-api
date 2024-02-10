import React, { useEffect, useState } from 'react'
import "./styles.css"

export const RickMortyAPI = () => {
    const [infoData, setInfoData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results);
            setInfoData(data.results);
        };
        fetchData();
    },[]);

    const filteredData = infoData.filter((info) =>
            info.name.toLowerCase().includes(searchTerm.toLowerCase()));





  return (
    <div>
        <h2>RickMortyAPI</h2>
        <div className='in'>
            <input
                placeholder='Search the Characters ....'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type='text'
                className='input'
                
            />
        </div>
        <div className='card'>
            {
                filteredData.map(info =>(
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
