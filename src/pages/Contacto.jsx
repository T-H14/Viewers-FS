import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/contacto.css';

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <p className="text-center mb-4">¿Tienes dudas, sugerencias o quieres colaborar? ¡Escríbenos!</p>

        <form className="contact-form mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Enviar mensaje</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}


export default Contacto;
