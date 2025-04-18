import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import './Home.css'

const Home = () => {
    useEffect(()=>{
        const themes = localStorage.getItem('theme')
    console.log(themes);
    },[])
    
  return (
    <div className="Home-main-div">
      <Navbar />
      <div className="home-main-navbar-wrapper-div">
        <div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <h1>Global TechHawk Services PVT.LTD</h1>
            <p>The Smart Way To Succes</p>
              <button className="Home-main-navbar-button">Lets' Go</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
