import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtistCard from '../components/ArtistCard';
import '../assets/css/artistas.css';
import tylerImg from '../assets/img/tyler.jpg';
import drakeImg from '../assets/img/drake.jpg';
import kendrickImg from '../assets/img/kendrick.jpg';
import travisImg from '../assets/img/travis.jpg';
import billieImg from '../assets/img/billie.jpg';
import marshmelloImg from '../assets/img/marshmello.jpg';
import eminemImg from '../assets/img/eminem.jpg';

const artistas = {
  tyler: {
    nombre: 'Tyler, The Creator',
    genero: 'Rap',
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
    genero: 'Hip-hop',
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
    genero: 'Rap',
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
  travis: {
    nombre: 'Travis Scott',
    genero: 'Hip-hop',
    visitas: {
      Spotify: 5800000,
      Youtube: 6700000,
      Tiktok: 3200000,
      AppleMusic: 2100000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: travisImg,
  },
  billie: {
    nombre: 'Billie Eilish',
    genero: 'Pop',
    visitas: {
      Spotify: 8000000,
      Youtube: 9200000,
      Tiktok: 4000000,
      AppleMusic: 2500000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: billieImg,
  },
  marshmello: {
    nombre: 'Marshmello',
    genero: 'Electronica',
    visitas: {
      Spotify: 4900000,
      Youtube: 7600000,
      Tiktok: 3100000,
      AppleMusic: 1700000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: marshmelloImg,
  },
  eminem: {
    nombre: 'Eminem',
    genero: 'Rap',
    visitas: {
      Spotify: 9000000,
      Youtube: 11000000,
      Tiktok: 3500000,
      AppleMusic: 3000000,
    },
    enlaces: {
      apple: 'https://music.apple.com/',
      tiktok: 'https://www.tiktok.com/',
      spotify: 'https://www.spotify.com/',
      youtube: 'https://www.youtube.com/',
    },
    imagen: eminemImg,
  },
};

function Artistas() {
  const [artistaSeleccionado, setArtistaSeleccionado] = useState(null);
  const [generoSeleccionado, setGeneroSeleccionado] = useState('Todos');

  const generos = ['Todos', 'Rap', 'Hip-hop', 'Pop', 'Electronica'];

  const artistasArray = Object.entries(artistas).map(([id, data]) => ({
    id,
    ...data,
  }));

  const artistasFiltrados =
    generoSeleccionado === 'Todos'
      ? artistasArray
      : artistasArray.filter((a) => a.genero === generoSeleccionado);

  const mostrarArtista = (id) => {
    setArtistaSeleccionado(artistas[id]);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Artistas famosos</h2>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
            {generos.map((g) => (
        <button
        key={g}
        className={`genero-btn btn ${generoSeleccionado === g ? 'btn-dark active' : 'btn-outline-dark'}`}
        onClick={() => setGeneroSeleccionado(g)}>{g}
        </button>
          ))}
        </div>

        <div className="row justify-content-center">
          {artistasFiltrados.map((artista) => (
            <ArtistCard
              key={artista.id}
              id={artista.id}
              nombre={artista.nombre}
              visitas={artista.visitas}
              imagen={artista.imagen}
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
