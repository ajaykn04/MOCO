import { AppBar, Avatar, Button, Container, IconButton, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import profileImage from '../assets/defaultlogin.png';
import iconImage from '../assets/MOCO.ico';

const StyledToolbar = styled(Toolbar)`
    background-color: black;
    
`;

const Navbar = () => {

    const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/login');
  };
    
  return (
    <div>
        
            
        <AppBar position='absolute'>
            <StyledToolbar >
                
                <Avatar sx={{ width: 50, height: 50 }} alt="MOCO" src={iconImage} />
                <Typography style={{fontFamily:'initial'}}><h1>MOCO</h1></Typography>
                &nbsp;  For the best movie collections
                <Container sx={{ display: 'flex', justifyContent: 'flex-start', gap:'6rem' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant='text' style={{fontSize:'20px',fontFamily:'fantasy' ,color:'black'}}>
                    <Link style={{textDecoration:'none',color:'greenyellow'}} to={'/viewmovies'}>HOME</Link>
                </Button>
                <Button variant='text' style={{fontSize:'20px',fontFamily:'fantasy' ,color:'black'}}>
                    
                    <Link style={{textDecoration:'none',color:'greenyellow'}} to={'/viewmovies'}>View Movies</Link>
                </Button>
                <Button variant='text' style={{fontSize:'20px',fontFamily:'fantasy' ,color:'black'}}>
                    
                    <Link style={{textDecoration:'none',color:'greenyellow'}} to={'/addmovies'}>Add Movies</Link>
                </Button>
                </Container>
                <IconButton onClick={handleProfileClick}>
                    <Avatar alt="Profile" src={profileImage} />
                </IconButton>
            </StyledToolbar>
        </AppBar>
       
        
    </div>
  )
}

export default Navbar
