import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/index.css';
import Footer from '../components/Footer';

function Ingresar() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const usuariosValidos = [
    { usuario: 'admin', contrasena: '1234' },
    { usuario: 'tomas', contrasena: 'abcd' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const valido = usuariosValidos.some(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );

    if (valido) {
      alert('¡Bienvenido! Redirigiendo a la plataforma...');
      navigate('/');
    } else {
      alert('Usuario o contraseña incorrectos. Intenta nuevamente o regístrate.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className="mb-4">Bienvenido a Viewers</h1>
        <p className="mb-4">Tu plataforma para explorar artistas, estadísticas y más</p>

        <form className="w-100" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Ingresar</button>
        </form>

        <p className="mt-3">
          ¿No tienes cuenta? <Link to="/registro" className="text-decoration-none">Regístrate aquí</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Ingresar;
