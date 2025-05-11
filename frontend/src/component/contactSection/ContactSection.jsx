import React from "react";
import { motion } from "framer-motion";
import { Input, Button } from "antd";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { useInView } from "framer-motion";
import { useRef } from "react";

import "./ContactSection.css";

const { TextArea } = Input;

const ContactSection = () => {
    const ref = useRef(null);
const isInView = useInView(ref, { once: false, margin: "-100px" });
const formRef = useRef(null);
const formInView = useInView(formRef, { once: true, margin: "-100px" });


  return (
    <section className="contact-section">
      {/* Left Content */}
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-left"
      >
        <h1 className="contact-heading">
          Sayin D Certain?<br />But’i Pleasur
        </h1>
        <p className="contact-subheading">
          Temporibus Autem Quibusdam Et Aut Officiis Debitis Aut Rerum Necessitat.
        </p>
        <p className="contact-label">Circu of in</p>
        <p className="contact-email">abcd@consequatumit.com</p>
        <p className="contact-phone">04839 504886</p>
      </motion.div>

      {/* Right Form */}
      <motion.div
         ref={formRef}
         initial={{ opacity: 0, y: 50 }}
         animate={formInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.6, delay: 0.2 }}
         className="contact-form"
      >
        <Input placeholder="Odium *" size="large" className="custom-input" />
        <div className="input-row">
          <Input placeholder="Culpa*" size="large" className="custom-input" />
          <Input placeholder="Company*" size="large" className="custom-input" />
        </div>
        <Input placeholder="Begui*" size="large" className="custom-input" />
        <Input placeholder="Omnis voluptas assumindas?" size="large" className="custom-input" />
        <TextArea
          rows={4}
          placeholder="are bound to ensuei æ?"
          className="custom-input"
          style={{ resize: "none" }}
        />
        <div className="checkbox-line">
          <CheckCircleFilled className="check-icon" />
          <span>
            Obligations Of Business It Will Frequently Occur That Pleasures Have To Be.
          </span>
        </div>
        <Button
          type="primary"
          size="large"
          className="contact-button"
        >
          Matter <ArrowRightOutlined />
        </Button>
      </motion.div>
    </section>
  );
};

export default ContactSection;
