import { useEffect, useState } from "react";
import { Container, TextField, Pagination, Typography, Box, Alert } from "@mui/material";
import { obtenerPosts } from "../services/postsService";
import Tarjeta from "../components/Tarjeta";
import Spinner from "../components/Spinner";

const LIMITE = 10;

function Posts() {
  const [posts, setPosts] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [total, setTotal] = useState(100);
  const [buscar, setBuscar] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        setCargando(true);
        setError(null);
        const data = await obtenerPosts(pagina, LIMITE);
        setPosts(data.posts);
        setTotal(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, [pagina]);

  const postsFiltrados = posts.filter((p) =>
    p.title.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Posts</Typography>

      <TextField
        label="Buscar posts por título"
        variant="outlined"
        fullWidth
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        sx={{ mb: 3 }}
      />

      {error && <Alert severity="error">{error}</Alert>}

      {cargando ? (
        <Spinner />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          {postsFiltrados.map((post) => (
            <Tarjeta
              key={post.id}
              nombreUsuario={post.title}
              correo={`Usuario #${post.userId}`}
              descripcion={post.body}
            />
          ))}
        </Box>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(total / LIMITE)}
          page={pagina}
          onChange={(e, valor) => setPagina(valor)}
          color="primary"
        />
      </Box>
    </Container>
  );
}

export default Posts;