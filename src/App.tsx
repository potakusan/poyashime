import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Index from "./pages/index";
import Profile from "./pages/profile";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <div id="backgroundMask">
        <BrowserRouter>
          <Route path="/" exact component={Index}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/contact" exact component={Contact}/>
        </BrowserRouter>
      </div>
      <video autoPlay muted loop id="video">
        <source src="movie.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
