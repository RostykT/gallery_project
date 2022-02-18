import React from 'react';
import {useParams} from 'react-router-dom';


const FilmDetail = () => {
    const {filmId} = useParams()
    console.log(filmId)
  return (
    <div>filmDetail</div>
  )
}

export default FilmDetail