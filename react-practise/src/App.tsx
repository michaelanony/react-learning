import React from 'react';
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import MyNavLink from "./components/MyNavLink";
import { Link,BrowserRouter,Route,NavLink} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <div>Demo</div>
        <div className="app-content">
          <div>
          <MyNavLink
          activeClassName="app-active-class"
          toLink="/about"
          content="about"
          />       
           <MyNavLink
          activeClassName="app-active-class"
          toLink="/home"
          content="home"
          />       
          
          </div>
          <div>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
          </div>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
