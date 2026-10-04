import React from 'react'
import { Container, Typography, Button, Paper } from '@mui/material'
import { Link } from 'react-router'

function Inicio() {
  return (
    <Container sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Bienvenidos
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Explora los usuarios y los posts obtenidos desde JSONPlaceholder.
        </Typography>
        <Button variant="contained" component={Link} to="/usuarios" sx={{ mr: 2 }}>
          Ver usuarios
        </Button>
        <Button variant="outlined" component={Link} to="/posts">
          Ver posts
        </Button>
      </Paper>
    </Container>
  )
}

export default Inicio