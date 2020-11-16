import React from "react";
import './App.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectDetails from "./Components/ProjectDetail/ProjectDetails";
import AllContact from "./Components/AllContact/AllContact";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    
     
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/project">
              <ProjectDetails></ProjectDetails>
            </Route>
            <Route path="/contact">
              <AllContact></AllContact>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
          </Switch>
        </Router>
         
    
  );
}

export default App;
