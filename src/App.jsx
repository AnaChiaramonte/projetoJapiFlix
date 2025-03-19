import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Nuvem from "./assets/Design sem nome (9).png";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div id="app">
      <img className="Nuvem" src={Nuvem} alt="" />

      <Footer
        devn1={"Ana Geremias"}
        devL1={"https://github.com/Najul1a"}
        devn2={"Ana Lopes"}
        devL2={"https://github.com/AnaChiaramonte"}
        devn3={"Pedro Araujo"}
        devL3={"https://github.com/Najul1a"}
      />
    </div>
  );
};

export default App;
