import { useNavigate } from 'react-router-dom';

function Card({ title, text, link, buttonText }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center shadow">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
          <button
            className="btn btn-dark mt-3"
            onClick={() => navigate(link)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

