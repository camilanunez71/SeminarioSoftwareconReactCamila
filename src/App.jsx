import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import ListarUsuarios from './pages/ListarUsuarios'
import Posts from './pages/posts'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<ListarUsuarios />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  )
}

export default App