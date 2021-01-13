import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={Home} /> 
        
  
      </div>
    </Router>
  )
}

export default App;