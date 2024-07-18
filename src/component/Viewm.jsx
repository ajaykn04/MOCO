import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Viewm = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';

    axios.get(apiUrl)
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <Grid container spacing={2} sx={{mt:10}}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={15} md={4} lg={3} key={index}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: 'auto' }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Release Year: {movie.Year}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Genre: {movie.genre}
            </Typography> */}
            {/* <Typography variant="body2" color="text.secondary">
              Rating: {movie.rating}
            </Typography> */}
          </Paper>
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default Viewm