import React from 'react'
import { Link } from 'react-router'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Seminario de Software
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/usuarios">Usuarios</Button>
        <Button color="inherit" component={Link} to="/posts">Posts</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav