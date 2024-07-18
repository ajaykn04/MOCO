import { Button, colors, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <header>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap:'4rem' }}>
            
                <Typography variant='body1' style={{color:'white'}}>
                    <Link style={{fontWeight:'bold',fontFamily:'sans-serif',textDecoration:'none',color:'green'}} to={'/viewmovies'}>Home</Link>
                </Typography>
                <Typography variant='body1' style={{color:'white'}}>
                    <Link style={{fontWeight:'bold',fontFamily:'sans-serif',textDecoration:'none',color:'green'}} to={'/viewmovies'}>View Movies</Link>
                </Typography>
                <Typography variant='body1' style={{color:'white'}}>
                    <Link  style={{fontWeight:'bold',fontFamily:'sans-serif',textDecoration:'none',color:'green'}} to={'/addmovies'}>Add Movies</Link>
                </Typography>
                <Typography variant='body1' style={{color:'white'}}>
                    <Link style={{fontWeight:'bold',fontFamily:'sans-serif',textDecoration:'none',color:'green'}} to={'/login'}>SignUp/<br/>LogIn</Link>
                </Typography>
                
            
        </Toolbar>
        </header>
        <center><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><Button><Link to={'/viewmovies'} style={{textDecoration:'none',color:'greenyellow',fontSize:202}}>GO</Link></Button></center>
    </div>
  )
}

export default Home
