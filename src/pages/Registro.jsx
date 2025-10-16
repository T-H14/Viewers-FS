import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/index.css';
import Footer from '../components/Footer';

function Registro() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias por registrarte, ${usuario}! Ya puedes iniciar sesión.`);
    navigate('/ingresar');
  };

  return (
    <div className="page-wrapper">
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className="mb-4">Crea tu cuenta en Viewers</h1>
        <p className="mb-4">Accede a estadísticas, artistas y más</p>

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
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="btn btn-dark w-100">Registrarse</button>
        </form>

        <p className="mt-3">
          ¿Ya tienes cuenta? <Link to="/ingresar" className="text-decoration-none">Inicia sesión</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Registro;
