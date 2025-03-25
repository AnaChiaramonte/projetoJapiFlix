import React, { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, SetMovieDesc] = useState({});

  useEffect(() => {
    if (props.movieID) {
      fetch(`${props.apiUrl}&i=${props.movieID}`)
        .then((response) => response.json())
        .then((data) => SetMovieDesc(data))
        .catch((error) => console.error("Erro ao buscar filme:", error));
    }
  }, [props.movieID]); 

  // Exibir "Carregando..." enquanto a API não responde
  if (!movieDesc.Title) {
    return <div className="text-white text-center">Carregando...</div>;
  }

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img
            src={movieDesc.Poster}
            alt={`Imagem da capa do filme ${movieDesc.Title}`}
          />
          <div className={styles.movieType}>
            <div>
              <p className="text-uppercase">{movieDesc.Type}</p>
              <h1>{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movieDesc.Title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
