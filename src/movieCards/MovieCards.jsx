import { useState } from 'react';


import styles from './MovieCard.module.css';

const MovieCards = (props ) => {
  const[isModalOpen,setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
    <div className="card movie-card text-white bg-dark col-md-4 mt-5 w-25 h-500 align-items-md-center d-flex flex-wrap"  onClick={toggleModal}>

     <div className="card-body text-center" >
    <p>{props.Year}</p>
  </div>
 <div>
<img  src={props.Poster}  alt="" className="card-img-top img-fluid" />
</div> 
<div className="card-footer text-center">
<span className="text-uppercase fw-bold">{props.Type}</span>
<h3>{props.Title}</h3>
</div> 
</div>

</>
  );
};

export default MovieCards;