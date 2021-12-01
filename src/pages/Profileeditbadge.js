import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";
import { Link } from "react-router-dom";

const Profileeditbadge = () => {
  return (
    <>
      <Menu />
      <Navigate pagename=" Profile Edit" home="Home" />
      <section className="profileSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="settingDv">
                <h5 className="settingh5">Setting </h5>
                <h5 className="profileUl">Profile</h5>
                <ul className="ulProfileedit">
                  <Link className="text-decoration-none" to={"/profileedit"}>
                    <li className="  basicProfileTitle">
                      Basic Profile Setting{" "}
                    </li>
                  </Link>
                  <Link
                    to={"/profileeditbadge"}
                    className="text-decoration-none"
                  >
                    <li className="basicProfileTitleActive basicProfileTitle">
                      Badges & Verifications
                    </li>
                  </Link>
                </ul>

                <h5 className="profileUl">Others</h5>
                <ul className="ulProfileedit">
                  <Link to={"/"} className="text-decoration-none">
                    <li className="basicProfileTitle">Support</li>
                  </Link>
                  <Link to={"/"} className="text-decoration-none">
                    <li className="basicProfileTitle">Terms & Condition</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-8 profileformBoxMainDiv p-5">
              <h3 className="basicsProSettingH3 pb-3 text-capitalize">
                badges and verification
              </h3>
              <p className="BadgesTitle">Badges</p>
              <div className="row ">
                <div className="col-12 col-md-12 col-lg-6">
                  <div className=" framMain d-flex justify-content-between align-items-start">
                    <div className="frameDiv">
                      <img
                        src="./img/Frame1394.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <p className="framePara">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquid, laborum.
                    </p>
                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className=" framMain d-flex justify-content-between align-items-start">
                    <div className="frameDiv">
                      <img
                        src="./img/Frame1394.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <p className="framePara">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquid, laborum.
                    </p>
                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
              </div>
              <div className="row ">
                <p className="BadgesTitle">VERIFICATIONS</p>

                <div className="col-12 col-md-12 col-lg-6 ">
                  <div className="  d-flex justify-content-between align-items-center">
                    <div className="frameDiv">
                      <img
                        src="./img/Framecovid.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-1">
                      <h5 className="frameParaTitle m-0">Covid</h5>
                      <p className="framePara">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid, laborum.
                      </p>
                    </div>

                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="  d-flex justify-content-between align-items-center">
                    <div className="frameDiv">
                      <img
                        src="./img/FramePayment.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-1">
                      <h5 className="frameParaTitle m-0">Payment</h5>
                      <p className="framePara">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid, laborum.
                      </p>
                    </div>
                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-12 col-md-12 col-lg-6 ">
                  <div className="  d-flex justify-content-between align-items-center">
                    <div className="frameDiv">
                      <img
                        src="./img/FrameFb.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-1">
                      <h5 className="frameParaTitle m-0">Facebook</h5>
                      <p className="framePara">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid, laborum.
                      </p>
                    </div>

                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="  d-flex justify-content-between align-items-center">
                    <div className="frameDiv">
                      <img
                        src="./img/FrameTWITER.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-1">
                      <h5 className="frameParaTitle m-0">Twitter</h5>
                      <p className="framePara">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid, laborum.
                      </p>
                    </div>
                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-12 col-md-12 col-lg-6 ">
                  <div className="  d-flex justify-content-between align-items-center">
                    <div className="frameDiv">
                      <img
                        src="./img/FrameMobile.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-1">
                      <h5 className="frameParaTitle m-0">Mobile</h5>
                      <p className="framePara">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid, laborum.
                      </p>
                    </div>

                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="  d-flex justify-content-between align-items-center">
                    <div className="frameDiv">
                      <img
                        src="./img/FramebgCheck.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-1">
                      <h5 className="frameParaTitle m-0">Background Check</h5>
                      <p className="framePara">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid, laborum.
                      </p>
                    </div>
                    <button className="frameBtn">ADD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profileeditbadge;
