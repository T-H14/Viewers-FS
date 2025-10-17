import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtistCard from '../components/ArtistCard';
import '../assets/css/artistas.css';
import tylerImg from '../assets/img/tyler.jpg';
import drakeImg from '../assets/img/drake.jpg';
import kendrickImg from '../assets/img/kendrick.jpg';

const artistas = {
  tyler: {
    nombre: 'Tyler, The Creator',
    visitas: {
      Spotify: 4500000,
      Youtube: 5200000,
      Tiktok: 2800000,
      AppleMusic: 1000000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: tylerImg,
  },
  drake: {
    nombre: 'Drake',
    visitas: {
      Spotify: 7300000,
      Youtube: 8500000,
      Tiktok: 2500000,
      AppleMusic: 2000000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: drakeImg,
  },
  kendrick: {
    nombre: 'Kendrick Lamar',
    visitas: {
      Spotify: 6200000,
      Youtube: 7100000,
      Tiktok: 2400000,
      AppleMusic: 1800000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: kendrickImg,
  },
};

function Artistas() {
  const [artistaSeleccionado, setArtistaSeleccionado] = useState(null);

  const mostrarArtista = (id) => {
    setArtistaSeleccionado(artistas[id]);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Artistas famosos</h2>
        <div className="row justify-content-center">
          {Object.entries(artistas).map(([id, data]) => (
            <ArtistCard
              key={id}
              id={id}
              nombre={data.nombre}
              visitas={data.visitas}
              imagen={data.imagen}
              onClick={mostrarArtista}
            />
          ))}
        </div>

        {artistaSeleccionado && (
          <div id="artista-info" className="mt-5">
            <h3 className="text-center mb-4">{artistaSeleccionado.nombre}</h3>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Plataforma</th>
                  <th>Visitas</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(artistaSeleccionado.visitas).map(([plataforma, visitas]) => (
                  <tr key={plataforma}>
                    <td>{plataforma}</td>
                    <td>{visitas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Artistas;
