import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { useState, useEffect } from "react";
import lupa from "./assets/Lupa.svg";
import MovieCards from "./movieCards/MovieCards";
import Nuvem from "./assets/Design_sem_nome_(11).png";
import "./App.css"
import Footer from "./components/footer/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "";
  const apiUrl = ``;
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div
      id="app"
      className="d-flex flex-column justify-content-center align-items-center w-100"
    >
      <img className="Nuvem w-100" src={Nuvem} alt="" />
      <div className="d-flex w-75 m-0 mt-4 mb-2 align-items-center justify-content-between p-4 rounded-pill corPesquisa">
        <input
          className="bg-transparent border-0 fs-2 outLine align-self-baseline w-100"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquisa por filme..."
        />
        <img
          className=""
          onClick={() => searchMovies(search)}
          
          src={lupa}
          alt=""
         
        />
      </div>
      <MovieCards 
  Title="Inception" 
  Year="2010" 
  Type="Movie" 
  Poster="https://via.placeholder.com/300x450" 
  imdbID="tt1375666"
/>

    
  
    <Footer
      devn1={"Ana Geremias"}
      devL1={"https://github.com/Najul1a"}
      devn2={"Ana Lopes"}
      devL2={"https://github.com/AnaChiaramonte"}
      devn3={"Pedro Araujo"}
      devL3={"https://github.com/PedroAraujosz"}
    />
  </div>
);
};
  

export default App;
