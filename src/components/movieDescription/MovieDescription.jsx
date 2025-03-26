import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DescriptionModal = ({ apiUrl, movieID, toggleModal }) => {
  const [movieDesc, setMovieDesc] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}&i=${movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, [apiUrl, movieID]);

  if (!movieDesc) return null;

  return (
    <div
      className="modal fade show d-block movie-card"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white">
          {/* Cabeçalho */}
          <div className="modal-header border-0 position-relative">
            <h5 className="modal-title">{movieDesc.Title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white position-absolute"
              style={{ right: "15px", top: "15px" }}
              onClick={toggleModal}
            ></button>
          </div>

          {/* Corpo do modal */}
          <div className="modal-body text-center">
            <img
              src={movieDesc.Poster}
              className="img-fluid w-100"
              alt={`Capa do filme ${movieDesc.Title}`}
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
            <div className="mt-3">
              <span className="badge bg-secondary">{movieDesc.Type}</span>
              <h1 className="mt-4">{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movieDesc.Title
                )}`}
                className="btn btn-light mt-2 font-monospace"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assistir
              </a>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="modal-footer border-0 flex-column text-center">
            <p className="mb-1">
              ⭐ {movieDesc.imdbRating} | ⏳ {movieDesc.Runtime} | 📅{" "}
              {movieDesc.Released}
            </p>
            <p className="mb-1">
              <strong>Elenco:</strong> {movieDesc.Actors}
            </p>
            <p className="mb-1">
              <strong>Gênero:</strong> {movieDesc.Genre}
            </p>
            <p className="text-justify">
              <strong>Sinopse:</strong> {movieDesc.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
