import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="page-footer font-small indigo"
        style={{ background: "#2D408E" }}
      >
        <div className="container ">
          <div className="row ">
            <div className="col-md-3 mx-auto mt-3">
              <img src="./img/footerLogo.png" alt="footerlogo" />

              <div className="row g-0 mt-4">
                <div className="col-1 col-md-3 col-lg-3">
                  <a href="#" className="text-decoration-none">
                    <img src="./img/linkedin-in.png" alt="linkendlogo" />
                  </a>
                </div>
                <div className="col-1 col-md-3 col-lg-3">
                  <a href="#" className="text-decoration-none">
                    <img src="./img/facebook-f.png" alt="linkendlogo" />
                  </a>
                </div>{" "}
                <div className="col-1 col-md-3 col-lg-3">
                  <a href="#" className="text-decoration-none">
                    <img src="./img/twiter.png" alt="linkendlogo" />
                  </a>
                </div>{" "}
                <div className="col-1 col-md-3 col-lg-3">
                  <a href="#" className="text-decoration-none">
                    <img src="./img/instagram.png" alt="linkendlogo" />
                  </a>
                </div>
              </div>
              <div className="row g-0 mt-4 ">
                <div className="col-12 mt-sm-3 col-md-12 col-lg-12 ">
                  <a href="#" className="text-decoration-none">
                  <img src="./img/appstore.png" alt="storeapp" />
                  </a>
                </div>
                <div className="col-12 mt-sm-3 col-md-12 col-lg-12">
                  <a href="#" className="text-decoration-none">
                  <img src="./img/playstore.png" alt="storeapp" />
                  </a>
                </div>{" "}
               
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase mt-3 mb-4">about</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Cookie Policy</a>
                </li>
                <li>
                  <a href="#!">About QuiqPro</a>
                </li>
                <li>
                  <a href="#!">Terms & Conditions</a>
                </li>{" "}
                <li>
                  <a href="#!">How QuiqPro Works</a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase mt-3 mb-4">customer</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Service Near me</a>
                </li>
                <li>
                  <a href="#!">Client Policy</a>
                </li>
              
               
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2  mx-auto ">
             

            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Professional
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Sign Up As a Professional</a>
                </li>
                <li>
                  <a href="#!">Professional Policies</a>
                </li>
                <li>
                  <a href="#!">Community Guidline</a>
                </li>
               
                
              </ul>
            </div>

           

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                POPULAR SERVICES
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Financial Planning</a>
                </li>
                <li>
                  <a href="#!">Partnership Tax Return</a>
                </li>
                <li>
                  <a href="#!">About QuiqPro</a>
                </li>
                <li>
                  <a href="#!">Accounting / Bookkeeping</a>
                </li>
                <li>
                  <a href="#!">Estate Planning</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
