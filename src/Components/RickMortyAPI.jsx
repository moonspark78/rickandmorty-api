import React, { useEffect, useRef, useState } from 'react'
import "./styles.css"
import gsap from 'gsap';

export const RickMortyAPI = () => {
    const [infoData, setInfoData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const monElementRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results);
            setInfoData(data.results);
        };
        fetchData();
        const monElement = monElementRef.current;

        // Utilisez GSAP pour animer l'élément
        gsap.to(monElement, { duration: 1, x: 200, y: 100 });
        return () => {
            gsap.killTweensOf(monElement);
          };
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
        <div ref={monElementRef}>Bonjour !</div>
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
