
import './filmList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const FilmList = () => {
const [ data, setData ] = useState([])
useEffect(() => {
    const fetchData = async () => {
        const result = await axios({
            method: 'get',
            url: 'http://127.0.0.1:8001/films',
        });
        setData(result.data)
    };
    fetchData();
}, [])
console.log('data', data);
  return (
    <div className='container'>
        <h1>Recommend film for you.</h1>
        <div className='content'>
           { data && data.map((film, index) => (
            <div className="wrap" key={index}>
            <Link to={`/films/${index}`}>
                <img 
                    src={film.Poster}
                    alt={`${film.Title} ${film.Year}`}
                />
            </Link>
            
        </div>
           ))}
        
    </div>
    </div>
  )
}

export default FilmList;