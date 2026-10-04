import React, { useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material'
import Tarjeta from '../components/Tarjeta'
import Spinner from '../components/Spinner'
import ObtenerUsuarios from '../services/UsuariosService'

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)
  const [buscar, setBuscar] = useState("")

 const mostrarDatosUsuarios = async (name = "") => {
  try {
    setCargando(true)
    setError(null)
    const datosJson = await ObtenerUsuarios()
    const filtrados = datosJson.filter((u) =>
      u.username.toLowerCase().includes(name.toLowerCase())
    )
    setUsuarios(filtrados)
  } catch (err) {
    setError(err.message)
  } finally {
    setCargando(false)
  }
}

  useEffect(() => {
    mostrarDatosUsuarios()
  }, [])

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Usuarios</Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Buscar usuario por nombre"
          variant="outlined"
          fullWidth
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
        <Button variant="contained" onClick={() => mostrarDatosUsuarios(buscar)}>
          Buscar
        </Button>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}

      {cargando ? (
        <Spinner />
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 2,
          }}
        >
          {usuarios.map((u) => (
            <Tarjeta key={u.id} nombreUsuario={u.username} correo={u.email} />
          ))}
        </Box>
      )}

      <Button
        variant="outlined"
        sx={{ mt: 3 }}
        onClick={() => mostrarDatosUsuarios()}
      >
        Refrescar
      </Button>
    </Container>
  )
}

export default ListarUsuarios