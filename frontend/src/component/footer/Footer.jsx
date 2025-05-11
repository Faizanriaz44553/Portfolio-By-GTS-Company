import React from "react";
import { FacebookFilled, TwitterCircleFilled, LinkedinFilled, InstagramFilled, SendOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer-wrapper">
      <div className="Footer-container">

        <div className="Footer-column">
          <h3 className="Footer-title">Welc Palm</h3>
          <ul className="Footer-list">
            <li><a href="#">Loans</a></li>
            <li><a href="#">Printing & Contain</a></li>
            <li><a href="#">Other Gr</a></li>
            <li><a href="#">Printing To</a></li>
          </ul>
        </div>

        <div className="Footer-column">
          <h3 className="Footer-title">Rightes</h3>
          <ul className="Footer-list">
            <li><a href="#">Uncommanded And Whs</a></li>
            <li><a href="#">Dilute Metals</a></li>
            <li><a href="#">Matter</a></li>
            <li><a href="#">EXTE Circum</a></li>
            <li><a href="#">Region Resso</a></li>
            <li><a href="#">5 Shelving Fire</a></li>
          </ul>
        </div>

        <div className="Footer-column">
          <h3 className="Footer-title">Rachhams</h3>
          <ul className="Footer-list">
            <li><a href="#">Though Skin</a></li>
            <li><a href="#">Uncommanded And</a></li>
            <li><a href="#">Boglod</a></li>
          </ul>
        </div>

        <div className="Footer-column">
          <h3 className="Footer-title">Untramise</h3>
          <p className="Footer-desc">Remembered Maquadam Defend All</p>
          <form className="Footer-form">
            <input type="email" placeholder="The Worse" className="Footer-input" />
            <button type="submit" className="Footer-button">
              <SendOutlined />
            </button>
          </form>
          <div className="Footer-icons">
            <a href="#"><FacebookFilled /></a>
            <a href="#"><TwitterCircleFilled /></a>
            <a href="#"><LinkedinFilled /></a>
            <a href="#"><InstagramFilled /></a>
          </div>
        </div>

      </div>

      <div className="Footer-bottom">
        © 2004 - Consa Quantumit. Pre All From Ciuscamat
      </div>
    </footer>
  );
};

export default Footer;
