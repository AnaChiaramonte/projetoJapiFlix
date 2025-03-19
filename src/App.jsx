import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css"

import Nuvem from "./assets/Design sem nome (11).png"

const App = () => {



  return (
     <div id="app">
    <img className="Nuvem" src={Nuvem} alt="" />
   
        <input className="form-control mt-n5 m-5"
          
          type="text"
          placeholder="Pesquisa por filme..."
        />
    
    </div>
    
  );
};

export default App;
