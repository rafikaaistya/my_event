import React from "react";
import "../assets/style/style.css";

import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-landing">
        <div className="row ml-2 pt-2">
          <div className="col-5 pl-5">
            <span className="text-white pt-3">
              Made by Rafika Aistya Adiyan
            </span>
          </div>
          <div className="col-3 pl-5 text-white"></div>
          <div className="col-4 text-center text-white">
            <h5>
              <FaPhone style={{ color: "orange" }} /> Contact Us :
            </h5>
            <h4>0812-1686-3658</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
