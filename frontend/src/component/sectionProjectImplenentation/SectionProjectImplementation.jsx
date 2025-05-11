import React, { useState } from "react";
import "./SectionProjectImplementation.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Button from "../ui/button/Button";

const SectionProjectImplementation = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleStep = (index) => {
    if (isOpen === index) {
      setIsOpen(null); // 👈 Same card click hua to band karo
    } else {
      setIsOpen(index); // 👈 Naya card open karo
    }
  };

  const stepsSectionData = [
    {
      title: "Step 1 - project requerments",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi",
    },
    {
      title: "Step 2 - meeting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi",
    },
    {
      title: "Step 3 - project build and delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi",
    },
  ];

  return (
    <div className="section-p-i-main-container">
      {/* video section started */}
      <div className="section-p-i-child-container-1">
        <div className="section-p-i-pre-childs-1">
          <h1 className="section-p-i-pre-childs-1-heading">Mei and US</h1>
          <p className="section-p-i-pre-childs-1-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            provident quos itaque similique cupiditate ipsum distinctio
            praesentium corporis odio libero dolore officia totam quia,
            consequuntur assumenda in sint tempore sequi.
          </p>
          <Button content="let started" widht={130} height={40} isicon={true} />
        </div>
        <div className="section-p-i-pre-childs-2">
          <div className="section-p-i-video-wapper-main-div-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p6ca7gq5H70?si=AkR_HiYISxa3XPPs&amp;start=5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="section-p-i-video-wapper-main-div-2">
            <ArrowUpOutlined className="section-p-i-video-icon" />
          </div>
        </div>
      </div>
      {/* video section ended */}
      <h2 className="project-implementation-heading">
        Project Implementation Steps
      </h2>
      {stepsSectionData.map((item, index) => {
        return (
          <div className="project-step-card" key={index}>
            <div
              className="project-step-header"
              onClick={() => toggleStep(index)}
            >
              <div className="project-step-header-left">
                <CheckCircleOutlined className="project-step-icon" />
                <h3 className="project-step-title">{item.title}</h3>
              </div>

              {isOpen === index ? (
                <ArrowUpOutlined className="project-step-arrow" />
              ) : (
                <ArrowDownOutlined className="project-step-arrow" />
              )}
            </div>

            <div
              className={`project-step-content ${
                isOpen === index ? "open" : ""
              }`}
            >
              <p className="project-step-description">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionProjectImplementation;
