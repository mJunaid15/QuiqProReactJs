import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";

import FooterBanner from "../components/FooterBanner";
import Button from "@mui/material/Button";

const Creditbuying = () => {
  return (
    <>
      <Menu />

      <Navigate  pagename=" Buy Credits" home="Home" title="Buy Credits"
      para="  Form pages are used to collect or verify information to users, and
      basic forms are common in scenarios where there are fewer data
      items."
      
      />

      <section className="CardsSections">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="card buycard pt-lg-5">
                <div className="cardheader text-center d-flex justify-content-center align-items-center">
                  <p className="creditPara d-flex justify-content-center align-items-center">
                    <span className="zero">0</span> Credits
                  </p>
                </div>
                <div className="card-body cardwith ">
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxok.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Unlimited product updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxok.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Unlimited product updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxuncheck.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Email and community support
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btnbying mt-lg-5">
                    <Button variant="contained" className="w-100">
                      Try for free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="card buycard pt-lg-5">
                <div className="cardheader text-center d-flex justify-content-center align-items-center">
                  <p className="creditPara d-flex justify-content-center align-items-center">
                    <span className="zero">0</span> Credits
                  </p>
                </div>
                <div className="card-body cardwith ">
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxok.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Unlimited product updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxok.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Unlimited product updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxuncheck.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Email and community support
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btnbying mt-lg-5">
                    <Button variant="contained" className="w-100">
                      Try for free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="card buycard pt-lg-5">
                <div className="cardheader text-center d-flex justify-content-center align-items-center">
                  <p className="creditPara d-flex justify-content-center align-items-center">
                    <span className="zero">0</span> Credits
                  </p>
                </div>
                <div className="card-body cardwith ">
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxok.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Unlimited product updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxok.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Unlimited product updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 align-items-center">
                      <div className="">
                        <p className="d-flex align-items-center checkboxPara">
                          <img
                            src="./img/checkboxuncheck.png"
                            alt="checkbox"
                            className="pe-2"
                          />
                          Email and community support
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btnbying mt-lg-5">
                    <Button variant="contained" className="w-100">
                      Try for free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Creditbuying;
