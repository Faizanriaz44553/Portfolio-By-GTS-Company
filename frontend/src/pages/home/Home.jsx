import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import "./Home.css";
import Header from "../../component/header/Header";
import ClintSection from "../../component/clintSection/ClintSection";
import SectionProjectImplementation from "../../component/sectionProjectImplenentation/SectionProjectImplementation";
import EnvornmentSection from "../../component/EnvornmentSection/EnvornmentSection";
import Footer from "../../component/footer/Footer";
import NumberCounter from "../../component/ui/numberCounter/NumberCounter";
import { GlobalOutlined, ProfileOutlined, TeamOutlined } from "@ant-design/icons";
import ReviewSection from "../../component/reviewComponent/ReviewSection ";
import ContactSection from "../../component/contactSection/ContactSection";

const Home = () => {
  useEffect(() => {
    const themes = localStorage.getItem("theme");
    console.log(themes);
  }, []);
  const counterData = [
    {
      duration: 3,
      end: 45,
      percent: "%",
      para: "Proudly worked with clients across multiple countries, delivering quality and trust globally.",
      icon: <GlobalOutlined/>
    },
    {
      duration: 3,
      end: 60,
      percent: "+",
      para: "Successfully completed a wide range of projects with full client satisfaction.",
      icon:<ProfileOutlined/>
    },
    {
      duration: 3,
      end: 4.9,
      percent: "%",
      para: "Built strong relationships with numerous happy clients worldwide.",
      icon: <TeamOutlined/>
    },
  ];
  const envornmentSections = [
    {
      path: "/images/computer-1828603_1280.jpg",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus nesciunt autem, aliquid laboriosam vitae iure iste ipsam laborum nisi aliquam incidunt sit, ullam provident mollitia! Repudiandae animi numquam autem?",
    },
    {
      path: "/images/macbook-4405973_1280.jpg",
      trueColum: true,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus nesciunt autem, aliquid laboriosam vitae iure iste ipsam laborum nisi aliquam incidunt sit, ullam provident mollitia! Repudiandae animi numquam autem?",
    },
    {
      path: "https://cdn.pixabay.com/photo/2016/03/27/22/04/camera-1284459_960_720.jpg",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus nesciunt autem, aliquid laboriosam vitae iure iste ipsam laborum nisi aliquam incidunt sit, ullam provident mollitia! Repudiandae animi numquam autem?",
      isHeading: "Repudiandae animi numquam autem?",
    },
  ];

  return (
    <div>
      <div className="Home-main-div">
        <Navbar />
        <Header />
        <div className="home">
          <ClintSection />
          <SectionProjectImplementation />
          <div>
            {envornmentSections.map(({path , para , trueColum , isHeading}, index) => (
              <EnvornmentSection
                key={index}
                path={path}
                para={para}
                trueColum={trueColum}
                isHeading={isHeading}
              />
            ))}
          </div>

          <div className="home-counter-maindiv">
            {counterData.map(({ end, duration, para, percent , icon}, index) => {
              return (
                <div className="home-counter-wrapper-div" key={index}>
                  <span className="home-counter-icon">{icon}</span>
                  <NumberCounter
                    end={end}
                    duration={duration}
                    percent={percent}
                  />
                  <p className="home-counter-para" >{para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <ReviewSection/>
        <ContactSection/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
