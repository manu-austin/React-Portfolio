import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

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