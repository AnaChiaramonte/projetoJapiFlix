import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { useState, useEffect } from "react";
import lupa from "./assets/Lupa.svg";
import MovieCards from "./movieCards/MovieCards";
import Nuvem from "./assets/Design sem nome (11).png";
import Footer from "./components/footer/Footer";
import Switch from "./components/switch/Switch"
    
  

const App = () => {
  const [isLight, setIsLight] = useState(true);
  const troca = () => {
    setIsLight((anterior) => !anterior);
  };

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

  // O return tem que estar aqui dentro!
  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Switch troca={troca} isLight={isLight} />
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
        <MovieCards 
          Title="Inception" 
          Year="2010" 
          Type="Movie" 
          Poster="https://via.placeholder.com/300x450" 
          imdbID="tt1375666"
        />
        {movies?.length > 0 ? (
          <div className="container">
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
    </div>
  );
};

export default App;