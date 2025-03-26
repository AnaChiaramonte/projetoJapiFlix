import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { useState, useEffect } from "react";
import lupa from "./assets/Lupa.svg";
import MovieCard from "./components/movieCards/MovieCards";
import Nuvem from "./assets/Nuvem.png";
import Footer from "./components/footer/Footer";


    
  

const App = () => {
  const mudaTema = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute("data-bs-theme", tema);
  };
  mudaTema();


  // Listen for changes in the color scheme
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", mudaTema);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

 

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchMovies(search);
  };

  // Aqui o return deve estar dentro da função App
  return (
 
      <div
        id="app"
        className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <img className="Nuvem w-100" src={Nuvem} alt="" />
        <div className="d-flex w-75 m-0 mt-4 mb-2 align-items-center justify-content-between p-4 rounded-pill corPesquisa">
          <input
            className="bg-transparent border-0 fs-2 outLine align-self-baseline w-100"
            onKeyDown={handleKeyPress}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisa por filme..."
          />
          <img onClick={() => searchMovies(search)} src={lupa} alt="" />
        </div>
        <div className="container mt-4">
        <div className="row justify-content-center">
        {movies?.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center ">
            {movies.map((movie, index) => (
              <MovieCards key={index} apiUrl={apiUrl} {...movie} />
            ))}
          </div>
        ) : (
          <h2 className="empty">😢 Filme não encontrado 😢</h2>
        )}
        <Footer
          devn1={"Ana Geremias"}
          devL1={"https://github.com/Najul1a"}
          devn2={"Ana Lopes"}
          devL2={"https://github.com/AnaChiaramonte"}
          devn3={"Pedro Araujo"}
          devL3={"https://github.com/PedroAraujosz"}
        />
      </div>
      <MovieCard apiUrl="https://www.omdbapi.com/?apikey=SEU_API_KEY" imdbID={movie.imdbID} />
   </div>
   </div>
  );
};

export default App;