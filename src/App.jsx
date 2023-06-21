import Navbar from "./components/Navbar";

import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
  return( 
  <div className="App">
    <Navbar/>
    <div className="container">
      <Outlet/>
    </div>
  </div>

  );
}

export default App;
