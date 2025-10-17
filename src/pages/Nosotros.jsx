import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/nosotros.css';

function Nosotros() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Sobre Nosotros</h2>
        <p className="lead text-center mb-5">
          En Viewers creemos que la música no solo se escucha, se vive. Nuestra plataforma nació con el propósito de conectar a los fans con sus artistas favoritos, y mostrar el impacto real que tienen en cada rincón digital.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Nuestra historia</h4>
              <p>
                Viewers comenzó como un proyecto independiente impulsado por la pasión por la música y la tecnología. Lo que partió como una idea entre amigos se transformó en una plataforma que hoy analiza millones de visitas, tendencias y plataformas musicales en tiempo real.
              </p>

              <h4 className="mt-4 mb-3">Nuestra misión</h4>
              <p>
                Democratizar el acceso a datos musicales, empoderar a los artistas emergentes y ofrecer a los fans una experiencia visual, interactiva y transparente sobre el mundo musical que los rodea.
              </p>

              <h4 className="mt-4 mb-3">Nuestro equipo</h4>
              <p>
                Somos desarrolladores, diseñadores y melómanos. Nos une la curiosidad, la estética y el deseo de crear herramientas que inspiren. Cada línea de código está pensada para mejorar la experiencia de quienes aman la música tanto como nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;
