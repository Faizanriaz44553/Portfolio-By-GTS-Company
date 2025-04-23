import React from "react";
import './Header.css'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import LogoSlider from "../logoSlider/LogoSlider";

const Header = () => {
  return (
    <div>
      <div className="home-main-navbar-wrapper-div">
        <div className="home-content-wrapper-div">
          <div className="home-socail-icons-div">
            <span>
              <FacebookOutlined className="home-socail-icons" />
            </span>
            <br />
            <span>
              <InstagramOutlined className="home-socail-icons" />
            </span>
            <br />
            <span>
              <TwitterOutlined className="home-socail-icons" />
            </span>{" "}
            <br />
            <span>
              <LinkedinOutlined className="home-socail-icons" />
            </span>
            <br />
          </div>
          <div className="home-heading-wrapper-div">
            <h1 className="hme-main-heading">
              Global TechHawk Services PVT.LTD
            </h1>
            <p className="home-main-paragraph">The Smart Way To Succes</p>
            <button className="Home-main-navbar-button">Lets' Go</button>
          </div>
        </div>
        <div className="home-content-wrpper-div-2">
          <img
            className="home-content-wrpper-div-2-image"
            src="/images/mainLogo2.png"
            alt=""
          />
        </div>
        <div>
        <LogoSlider/>
        </div>
      </div>
    </div>
  );
};

export default Header;
