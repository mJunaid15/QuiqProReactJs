import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, DropdownButton, Dropdown } from "react-bootstrap";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FooterBanner from "./FooterBanner";

const Navmenu = () => {
  let pathnam = window.location.pathname;
  console.log(pathnam);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pathnam = window.location.pathname;
  }, [window.location.pathname]);

  return (
    <>
      <section className="navmenu">
        <Navbar className="" expand="lg">
          <div className="container">
            <Navbar.Brand as={Link} to={"/"}>
              <img src="./img/logo.png" className="img-fluid" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  BLOGS
                </Nav.Link>

                <DropdownButton
                  id="dropdown-basic-button"
                  title="CONSUMER"
                  className="btncolor NavLi"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                  id="dropdown-basic-button"
                  title="MASTER"
                  className=" btncolor  "
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </section>

      <section className="heroSec">
        <Navbar bg="" expand="lg">
          <div className="container  border-bottom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" ">
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Development & IT
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Design & Creative
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Written & Translation
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Sales & Marketing
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Finances & Accounting
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Home Cleaning
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Home Gardening
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/snag"}
                  className={`${pathnam.match("/") ? "link-active" : ""} NavLi`}
                >
                  Anything
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <div className="mockup ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 ">
                <div className="findProdiv   d-flex align-items-center">
                  <div className="container ">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6 borderPro">
                        <h1 className="findPro text-lg-center">
                          Find Professional
                        </h1>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 borderCustomer">
                        <h1 className="findcus text-lg-center">
                          Find Customer
                        </h1>
                      </div>
                    </div>
                    <div className="row mt-lg-5">
                      <div className="col-12">
                        <h1 className="FindCity">
                          Find Professional in Your City
                        </h1>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col-3 border-bottom border-top border-start d-flex justify-content-center align-items-center">
                        <Form.Label className="mt-1 formcolor">
                          Zipcode
                        </Form.Label>
                      </div>
                      <div className="col-6">
                        <Form.Select aria-label="Default select example">
                          <option>Who you are looking for?</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <div className="col-3  ">
                        <button className=" btn w-100 py-2 btn-primary ms-0 btncolor">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="mobimg">
                  <img
                    src="./img/mockup1.png"
                    alt="smalMob"
                    className="smallMobimg"
                  />
                  <img
                    src="./img/mockup2.png"
                    alt="smalMob"
                    className="bigMobimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="findtheProSection">
        <div className="container cardRelative">
          <h1 className="findthebestH1">Find the Best Professional</h1>
          <p className="findthebestPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>

          <Button variant="text" className="findbtn">
            Learn more <ArrowRightAltIcon />
          </Button>
          <div className="card1">
            <div className="card landingCard" style={{ width: "21rem" }}>
              <img src="./img/3.png" className="card-img-top" alt="cardImg" />
              <div className="card-body">
                <h5 className="card-title">Select Service</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card landingCard" style={{ width: "21rem" }}>
              <img src="./img/1.png" className="card-img-top" alt="cardImg" />
              <div className="card-body">
                <h5 className="card-title">Select Service</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card3">
            <div className="card landingCard" style={{ width: "21rem" }}>
              <img
                src="./img/2 20.png"
                className="card-img-top"
                alt="cardImg"
              />
              <div className="card-body">
                <h5 className="card-title">Select Service</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hiring">
        <div className="container">
          <h1 className="hiringMainh1">
            Hiring expert for a specific skill project
          </h1>
          <p className="HiringPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <div className="row my-5">
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Tax <br /> Preparation{" "}
                </h1>
                <img src="./img/01.png" alt="boximg" className="mt-lg-5" />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Design & <br />
                  Creative
                </h1>
                <img src="./img/Group.png" alt="boximg" className="mt-lg-5" />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Writing & <br />
                  Translation{" "}
                </h1>
                <img
                  src="./img/Group(1).png"
                  alt="boximg"
                  className="mt-lg-5"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Sales & <br />
                  Marketing{" "}
                </h1>
                <img
                  src="./img/Group(2).png"
                  alt="boximg"
                  className="mt-lg-5"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Finances & <br /> Accounting{" "}
                </h1>
                <img
                  src="./img/Group(3).png"
                  alt="boximg"
                  className="mt-lg-5"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Home <br />
                  Cleaning{" "}
                </h1>
                <img
                  src="./img/Group(4).png"
                  alt="boximg"
                  className="mt-lg-5"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  Engneering & <br />
                  Architecture{" "}
                </h1>
                <img
                  src="./img/Group(5).png"
                  alt="boximg"
                  className="mt-lg-5"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="box">
                <h1 className="hiringH1">
                  {" "}
                  HR & <br />
                  Training{" "}
                </h1>
                <img
                  src="./img/Group(6).png"
                  alt="boximg"
                  className="mt-lg-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bgimg_section mt-lg-5">
        <div className="backgroundImgDiv">
          <div className="bg-heading-box d-flex align-items-center">
            <div>
              <h1 className="bgH1">Headline</h1>
              <p className="bgimgPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum quis amet, faucibus lorem. Lectus amet odio quis sed
                adipiscing adipiscing magna non. Nullam turpis faucibus
                ridiculus suscipit. Et blandit suspendisse curabitur eu congue
                dui ut.
              </p>

              <Button variant="text" className="findbtn">
                Learn more <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="downloadSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src="./img/Mockup.png"
                alt="mockup"
                className="threeMobimg"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
              <div className="container ">
                <h1 className="downloadH1">Download app to enjoy more!</h1>
                <p className="downloadPara">
                  Amet in elementum nulla scelerisque dui, egestas at. Elit
                  consectetur turpis elementum amet vitae et etiam nec. Varius
                  volutpat hac adipiscing tincidunt pretium.
                </p>

                <div className="row g-0 text-center">
                  <div className="col-12 col-md-6 col-lg-6">
                    <img src="./img/playstore.png" alt="playstore" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <img src="./img/appstore.png" alt="playstore" />
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

export default Navmenu;
