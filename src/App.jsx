import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"
import Nuvem from "./assets/Design sem nome (9).png"

const App = () => {
  return <div id="app">
 
    <img className="Nuvem" src={Nuvem} alt="" />
  </div>;
};

export default App;
