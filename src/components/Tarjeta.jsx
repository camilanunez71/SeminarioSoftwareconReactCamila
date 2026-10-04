import React from 'react'
import iguana from '../assets/iguana.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Tarjeta({
  nombreUsuario = "Nombre",
  correo = "nombre@correo.com",
  descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cupiditate?",
}) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia sx={{ height: 140 }} image={iguana} title="green iguana" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {nombreUsuario}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {correo}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Ver más...</Button>
      </CardActions>
    </Card>
  )
}

export default Tarjeta