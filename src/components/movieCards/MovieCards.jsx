import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDescription from "../movieDescription/MovieDescription";
import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      {/* Cartão do Filme */}
      <div
        className={`card movie-card text-white bg-dark mt-5 w-25 h-20 shadow-lg ${styles.sombreado} ${styles.movieCard}`}
        style={{
          margin: "1.5rem",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onClick={toggleModal}
      >
        <div className={styles.yearOverlay}>
          <p className="card-text text-center">{props.releaseDate}</p>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${props.poster}`}
            alt="Movie Poster"
            className="card-img-top img-fluid"
          />
        </div>
        <div className="card-footer text-center">
          <h3 className="mt-2">{props.title}</h3>
        </div>
      </div>

      {/* Modal (Só aparece quando isModalOpen for true) */}
      {isModalOpen && (
        // <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        //   <div className="modal-dialog modal-dialog-centered">
        //     <div className="modal-content">
        //       <div className="modal-header">
        //         <h5 className="modal-title">{props.Title}</h5>
        //         <button
        //           type="button"
        //           className="btn-close"
        //           onClick={toggleModal}
        //         ></button>
        //       </div>
        //       <div className="modal-body">
        <MovieDescription
          apiUrl={props.apiUrl}
          movieID={props.imdbID}
          toggleModal={toggleModal}
        />
        //       </div>
        //       <div className="modal-footer">
        //         <button className="btn btn-secondary" onClick={toggleModal}>
        //           Fechar
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}

      {/* Fundo escuro para modal Bootstrap */}
      {isModalOpen && (
        <div className="modal-backdrop fade show" onClick={toggleModal}></div>
      )}
    </>
  );
};

export default MovieCard;
