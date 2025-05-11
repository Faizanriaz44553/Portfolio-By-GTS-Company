import { Drawer } from "antd";
import Button from "../ui/button/Button";
import { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import "./Navbar.css";
import { ThemeContext } from "../../context/themeContext/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setClicked(true);
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      {/* laptop version started*/}
      <div className="navbar-laptop-version">
        <div>
          <h1 className="nav-links">TechHawk</h1>
        </div>
        <div>
          <ul className="nav-main-div-ul">
            <li className="nav-links">services</li>
            <li className="nav-links">about</li>
            <li className="nav-links">clints</li>
          </ul>
        </div>
        <div className="navbar-main-button-div-wrapper">
          <Button
            content="let started"
            widht={150}
            height={50}
            isicon={true}
            onClick={showLoading}
          />
          <span
            onClick={toggleTheme}
            style={{
              padding: "8px 16px",
              margin: "1rem",
              borderRadius: "5px",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              border: "2px solid gray",
            }}
          >
            {theme === "light" ? (
              <MoonFilled style={{ fontSize: `${1.3}rem`, fontWeight: 500}} />
            ) : (
              <SunFilled style={{ fontSize: `${1.3}rem`, fontWeight: 500}} />
            )}
          </span>
        </div>
      </div>
      {/* laptop version ended*/}

      {/* mobile version started*/}
      <div className="navbar-mobile-version">
        <div>
        <MenuFoldOutlined
          onClick={showLoading}
          className={`main-manu-icon ${clicked ? "animate-icon" : ""}`}
        />
        </div>
        <div>
        <h1 className="main-nav-logo">TechHawk</h1>
        </div>
        <span
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            margin: "1rem",
            borderRadius: "5px",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            border: "2px solid gray",
          }}
        >
          {theme === "light" ? (
            <MoonFilled style={{ fontSize: `${1.3}rem`, fontWeight: 500 ,animation: "popIn 0.5s ease"}} />
          ) : (
            <SunFilled style={{ fontSize: `${1.3}rem`, fontWeight: 500 ,animation: "popIn 0.5s ease"}} />
          )}
        </span>
        <Drawer
          closable
          destroyOnClose
          title={<p>Loading Drawer</p>}
          placement="left"
          open={open}
          loading={loading}
          onClose={() => {
            setOpen(false);
            setClicked(false);
          }}
        >
          <Button
            type="primary"
            style={{ marginBottom: 16 }}
            onClick={showLoading}
          >
            Reload
          </Button>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
      {/* mobile version ended*/}
    </div>
  );
};

export default Navbar;
