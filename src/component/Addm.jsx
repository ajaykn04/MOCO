import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Navbar from './Navbar';

const Addm = () => {

  const years = [];
  for (let year = 2024; year >= 1800; year--) {
    years.push(
      <MenuItem key={year} value={year.toString()}>
        {year}
      </MenuItem>
    );
  }

  const [formData, setFormData] = useState({
    title: '',
    releaseYear: '',
    genre: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      title: '',
      releaseYear: '',
      genre: '',
      rating: '',
    });
  };

  return (
    
    <Box sx={{ display: 'flex', mt: 25, justifyContent:'center' }}>
      <Navbar/>
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '500px' }}>
          <TextField
            label="Movie Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
            required
            size='mediumf'
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' }, sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
            },}}
          />
          <FormControl variant="outlined" required
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green', 
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
          }}
          >
            <InputLabel
            style={{ color: 'white' }} 
            
            >Release Year</InputLabel>
            <Select
            style={{ color: 'white' }}
              label="Release Year"
              name="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
            >
              {years}
              
            </Select>
          </FormControl>
          <FormControl variant="outlined" required sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', 
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'green', 
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
            }}>
            <InputLabel style={{ color: 'white' }}>Genre</InputLabel>
            <Select
            style={{ color: 'white' }}
              label="Genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            >
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
              <MenuItem value="Fantasy">Fantasy</MenuItem>
              <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
              <MenuItem value="Horror">Horror</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              
            </Select>
          </FormControl>
          <FormControl variant="outlined" required sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', 
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'green',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
            }}>
            <InputLabel style={{ color: 'white' }}>Rating</InputLabel>
            <Select
              label="Rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              style={{ color: 'white' }}
            >
              <MenuItem value="1">1 Star</MenuItem>
              <MenuItem value="2">2 Stars</MenuItem>
              <MenuItem value="3">3 Stars</MenuItem>
              <MenuItem value="4">4 Stars</MenuItem>
              <MenuItem value="5">5 Stars</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Addm
