import React, { useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = ({ movieDesc }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === styles.modal) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <div className={styles.modalBody}>
          <img
            src={movieDesc.Poster}
            alt={movieDesc.Title}
            style={{ objectFit: "contain", maxHeight: "500px" }}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-3">
            <span className="badge bg-secondary">{movieDesc.Type}</span>
            <h1 className="mt-1">{movieDesc.Title}</h1>
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
  );
};

export default MovieDescription;
