import {useParams, } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './filmDetail.css';
import {
  Grid,
  Paper,
  } from '@mui/material';

const FilmDetail = () => {
    const {filmId} = useParams();
    const [ film, setFilm ] = useState([]);
    const paperStyle={padding :20,height:'100%',width:'60vw', margin:"20px auto"}


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios({
                method: 'get',
                url: `http://127.0.0.1:8001/films/${filmId}`,
            });
            setFilm(result.data);
        };
        fetchData();
    }, [filmId])
//  TODO: fix style
console.log(film)
  return (
   <Grid>
     <Paper elevation={10} style={paperStyle}>
       <Grid align="center">
          <h1>{film.Title}</h1>
       </Grid>
       <Grid container spacing={12}>
          <Grid item xs={8} align="center">
              <img 
                src={film.Poster}
                alt={film.Title}
              />
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2} >
              <Grid item xs={4}>
                Year: 
              </Grid>
              <Grid item xs={8}>
                {film.Year}
              </Grid>
              <Grid item xs={4}>
                Country: 
              </Grid>
              <Grid item xs={8}>
                {film.Country}
              </Grid>
              <Grid item xs={4}>
                Directed by:
              </Grid>
              <Grid item xs={8}>
              {film.Directed_by}
              </Grid>
            </Grid>
          </Grid>
       </Grid>
          <Grid item>
              {film.Description}
            </Grid>
          <Grid  item align="center">
              <video src="http://localhost:8001/video" width="900" controls />
          </Grid>
     </Paper>
   </Grid>
  )
}

export default FilmDetail