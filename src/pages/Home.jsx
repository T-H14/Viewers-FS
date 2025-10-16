import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container main-content text-center mt-5">
        <h1 className="mb-4">¡Bienvenido a Viewers!</h1>
        <p className="lead">Explora artistas, plataformas y estadísticas en tiempo real.</p>

        <div className="row justify-content-center mt-5">
          <Card
            title="Artistas"
            text="Descubre los perfiles y visitas de tus artistas favoritos."
            link="/artistas"
            buttonText="Ver artistas"
          />
          <Card
            title="Contacto"
            text="¿Tienes dudas o sugerencias? Escríbenos."
            link="/contacto"
            buttonText="Ir a contacto"
            />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
