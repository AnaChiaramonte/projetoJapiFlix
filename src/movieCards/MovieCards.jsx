import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDescription from "../components/movieDescription/MovieDescription"

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="card movie-card text-white bg-dark" onClick={toggleModal}>
        <div className="card-body text-center">
          <p className="card-text">{props.Year}</p>
        </div>
        <img src={props.Poster} alt="Movie Poster" className="card-img-top img-fluid" />
        <div className="card-footer text-center">
          <span className="text-uppercase fw-bold">{props.Type}</span>
          <h3 className="mt-2">{props.Title}</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.Title}</h5>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                <MovieDescription apiUrl={props.apiUrl} movieID={props.imdbID} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={toggleModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
     
      )}
      {isModalOpen &&(
        <MovieDescription apiUrl={props.apiUrl} movieID={props.imdbID} click={toggleModal}/>
      )}
    </>
  );

};

export default MovieCard;
