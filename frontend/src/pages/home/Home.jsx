import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import './Home.css'
import Header from "../../component/header/Header";

const Home = () => {
    useEffect(()=>{
        const themes = localStorage.getItem('theme')
    console.log(themes);
    },[])
    
  return (
     <div>
         <div className="Home-main-div">
      <Navbar />
      <Header/>
      <div className="home">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid libero nesciunt sint placeat dolorem mollitia illum unde. Quo nemo, neque cumque soluta temporibus dolorum magni distinctio nesciunt nihil itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur dolorem harum, cupiditate iusto atque provident, fuga in, vero totam qui ipsa quod dicta sed autem blanditiis dolore dolor aspernatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, molestias aliquid at sunt inventore asperiores non voluptate neque porro soluta dignissimos temporibus, iusto est corrupti ducimus tempore iure accusamus esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro omnis beatae, quasi voluptatibus, minima rerum dicta id hic iste earum voluptatum, nobis dolores. Cum voluptatem expedita voluptates enim adipisci.
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, quasi, alias magni, dolor cum sed magnam officia voluptates repellat perferendis soluta veritatis? Natus sequi voluptatibus fugit sint accusamus, suscipit quia.</h1>
        </div>
    </div>
     </div>
  );
};

export default Home;
