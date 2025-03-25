import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const MovieDescription = ({ apiUrl, movieID, click }) => {
  const [movieDesc, setMovieDesc] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}&i=${movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, [apiUrl, movieID]);

  if (!movieDesc) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white">
          
          {/* Cabeçalho */}
          <div className="modal-header border-0">
            <h5 className="modal-title">{movieDesc.Title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={click}></button>
          </div>

          {/* Corpo do modal */}
          <div className="modal-body text-center">
            <img src={movieDesc.Poster} className="img-fluid " alt={`Capa do filme ${movieDesc.Title}`} 
 />
            <div className="mt-3">
              <span className="badge bg-secondary">{movieDesc.Type}</span>
              <h1 className="mt-2">{movieDesc.Title}</h1>
              <a href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`} 
                 className="btn btn-light mt-2 font-monospace font-family" 
                 target="_blank">
                 Assistir
              </a>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="modal-footer border-0 flex-column text-center">
            <p className="mb-1">⭐ {movieDesc.imdbRating} | ⏳ {movieDesc.Runtime} | 📅 {movieDesc.Released}</p>
            <p className="mb-1"><strong>Elenco:</strong> {movieDesc.Actors}</p>
            <p className="mb-1"><strong>Gênero:</strong> {movieDesc.Genre}</p>
            <p className="text-justify"><strong>Sinopse:</strong> {movieDesc.Plot}</p>
           
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default MovieDescription;

