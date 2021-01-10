import React from 'react';
import './App.css';
import  {Header}  from "./components/Header";
import  {Footer}  from "./components/Footer";
import { SiderBar } from "./components/SiderBar";
function App() {
  return (
    <div className="App">
        <SiderBar/>
        <Header/>
        
        <Footer/>
    </div>
  );
}

export default App;
