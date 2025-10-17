function ArtistCard({ id, nombre, visitas, imagen, onClick }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card artista-card shadow" onClick={() => onClick(id)}>
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Visitas totales: {Object.values(visitas).reduce((a, b) => a + b)}M</p>
          <div className="d-flex justify-content-center mt-4 gap-3">
            <a id={`link-apple-${id}`} className="btn btn-primary" href="#" target="_blank">
              Apple Music <i className="fa-brands fa-apple"></i>
            </a>
            <a id={`link-tiktok-${id}`} className="btn btn-tiktok" href="#" target="_blank">
              TikTok <i className="fa-brands fa-tiktok"></i>
            </a>
            <a id={`link-spotify-${id}`} className="btn btn-success" href="#" target="_blank">
              Spotify <i className="fa-brands fa-spotify"></i>
            </a>
            <a id={`link-youtube-${id}`} className="btn btn-danger" href="#" target="_blank">
              YouTube <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
