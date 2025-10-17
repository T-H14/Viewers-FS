import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Artistas from './pages/Artistas.jsx';
import Contacto from './pages/Contacto.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Ingresar from './pages/Ingresar.jsx';
import Registro from './pages/Registro.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artistas" element={<Artistas />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/ingresar" element={<Ingresar />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default App;