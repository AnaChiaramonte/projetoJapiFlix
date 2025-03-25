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

  if (!movieDesc) return null; // Evita erro caso os dados ainda não tenham carregado

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" onClick={click}>
      <div className="bg-black text-white rounded p-3 shadow-lg position-relative" style={{ maxWidth: "850px", width: "90%" }} onClick={(e) => e.stopPropagation()}>
        
        {/* Botão de Fechar */}
        <button className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={click}></button>

        {/* Poster */}
        <img src={movieDesc.Poster} alt={`Imagem da capa do filme ${movieDesc.Title}`} className="w-100 rounded-top" style={{ height: "400px", objectFit: "cover" }} />

        {/* Informações do Filme */}
        <div className="p-3">
          <div className="d-flex align-items-center gap-2">
            <img src={japiflix} alt="JapiFlix" style={{ width: "30px" }} />
            <h2 className="fs-4 m-0">{movieDesc.Title}</h2>
          </div>
          <span className="badge bg-danger mt-2">{movieDesc.Type}</span>
          <p className="mt-3">{movieDesc.Plot}</p>

          <div className="d-flex justify-content-between flex-wrap mt-3">
            <span><strong>⭐ IMDb:</strong> {movieDesc.imdbRating}</span>
            <span><strong>⏳ Duração:</strong> {movieDesc.Runtime}</span>
            <span><strong>📅 Lançamento:</strong> {movieDesc.Released}</span>
          </div>

          <div className="mt-3">
            <p><strong>🎭 Elenco:</strong> {movieDesc.Actors}</p>
            <p><strong>🎬 Gênero:</strong> {movieDesc.Genre}</p>
          </div>

          {/* Botão Assistir */}
          <div className="text-center mt-4">
            <a href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`} target="_blank" className="btn btn-danger fw-bold">
              ▶️ Assistir
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieDescription;
