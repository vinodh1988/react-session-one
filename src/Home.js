import React from 'react';
import { BrowserRouter as Router, Link ,Route } from 'react-router-dom';
import App from './App';
import About from './Components/About';
import Api from './Components/Api';

class Home extends React.Component{

    
    render(){
        return(
        <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    
                <a className="navbar-brand" href="/">My App</a>
            

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api">Api</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={App} ></Route>
          <Route path="/about" component ={About}></Route>
          <Route path="/api" component = {Api}></Route>
          </Router>
        )
     }
}

export default Home;