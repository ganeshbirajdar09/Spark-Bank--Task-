import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mainfooter foot" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4 className="heading-1">Spark Bank</h4>

                <ul className="list-unstyled">
                  <img className="gdsc-logo" src="" alt="" />
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4 className="heading-2">Need Help</h4>
                <ul className="list-unstyled">
                  <li className="gored">
                    <a href="#">Customer Care</a>
                  </li>
                  <li className="goorange">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="gogreen">
                    <a href="#">Rates</a>
                  </li>
                  <li className="goblue">
                    <a href="#">Locate Us</a>
                  </li>
                  <li className="gowhite">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4 className="heading-3">Calculators</h4>
                <ul className="list-unstyled">
                  <li className="gored">
                    <a href="#">Personal Loan</a>
                  </li>
                  <li className="goorange">
                    <a href="#">Car Loan</a>
                  </li>
                  <li className="gogreen">
                    <a href="#">Gold Loan</a>
                  </li>
                  <li className="goblue">
                    <a href="#">Home Loan</a>
                  </li>

                  <li className="gowhite">
                    <a href="#">SIP Calculator</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="heading-4">Email</h4>

              <ul className="social-network social-circle">
                {/* <li>
                  <a href="#" className="icoInstagram" title="Instagram">
                    <i className="fa fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoYoutube" title="Youtube">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
              <ul className="social-network social-circle">
                <li>
                  <a href="#" className="icoLinkedin" title="Linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li> */}
                <li>
                  <a href="#" className="icoEnvelope" title="Envelope">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <h4 class="divider donotcross" contenteditable>
              Spark Bank
            </h4>
            <div className="col-md-12 copy">
              <p className="text-center">
                Copyright &copy; 2021 All Rights Reserved by
                <Link href="#"> Spark Bank & Ganesh</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
