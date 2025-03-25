import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MovieDescription.module.css"


const MovieDescription = (props) => {
  const [movieDesc, SetMovieDesc] = useState([]);
  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
    .then((response) => response.json())
    .then((data) => SetMovieDesc(data))
    .catch((error) => console.error(error));
  }, []);
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
              <img src="" alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movieDesc.Title
                )}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
       </div>
       </div>
  );
}

export default MovieDescription
