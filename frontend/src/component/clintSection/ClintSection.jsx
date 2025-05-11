import React from "react";
import Button from "../ui/button/Button";
import './ClintSection.css'
const ClintSection = () => {
  const brandsLogo = [
    "/images/Pakistan-Stock-Exchange-Limited.jpg",
    "/images/BF-Biosciences.jpg",
    "/images/LMKR.jpg",
    "/images/ORIX-Modaraba.jpg",
    "/images/Pakistan-Stock-Exchange-Limited.jpg",
    "/images/BF-Biosciences.jpg",
    "/images/LMKR.jpg",
    "/images/ORIX-Modaraba.jpg",
    "/images/ORIX-Modaraba.jpg",
  ]
  return (
    <div className="clintSection-main-container">
      <div className="clintSection-child-contianer-1">
        <h1 className="clintSection-child-contianer-heading">hello world</h1>
        <p className="clintSection-child-contianer-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          eligendi inventore eius atque ut culpa aperiam quam minus sed fugiat
          quaerat, ab odit laborum vel officiis, quas ipsum! Eius, illum?
        </p>

        <Button content="let started" widht={150} height={50} isicon={true} />
      </div>
      <div className="clintSection-child-contianer-2">
        <div className="clintSection-right-image-main-div">
          {
            brandsLogo.slice(0 , 3).map((item , index)=>{
               return <div key={index} className="clintSection-right-image-child-div">
                          <img className="clintSection-right-main-image" src={item} alt="" />
               </div>
            })
          }
        </div>
        <div className="clintSection-right-image-main-div">
        {
            brandsLogo.slice(3 , 6).map((item , index)=>{
               return <div key={index} className="clintSection-right-image-child-div">
               <img className="clintSection-right-main-image" src={item} alt="" />
    </div>
            })
          }
        </div>
        <div className="clintSection-right-image-main-div">
        {
            brandsLogo.slice(6 , 9).map((item , index)=>{
               return <div key={index} className="clintSection-right-image-child-div">
               <img className="clintSection-right-main-image" src={item} alt="" />
    </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ClintSection;
