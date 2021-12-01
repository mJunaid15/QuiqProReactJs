import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import Googlemap from "../components/Googlemap";
import { Carousel } from "react-bootstrap";

const Profileprofessional = () => {
  return (
    <>
      <Menu />

      <section className="buyCreditSection mt-2">
        <div className="container buycreDiv">
          <p className="navigate">
            Home / Find Professional / Professional Name
          </p>
        </div>
      </section>

      <section className="herobgPro mt-3">
        <div className="herobgPosition">
          <div className="heroCoverimg">
            <img src="./img/Projectcover.png" alt="img" className="img-fluid" />
          </div>
          <div className="blackboxHero">
            <h1 className="blackboxH1">Project Tite</h1>
            <p className="blackboxPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
          </div>
          <div className="profilePictureName">
            <div className="container circlerow ">
              <div className="d-flex align-items-center">
                <div className="circleimg ">
                  <img
                    src="./img/Ellipse 23.png"
                    alt="img"
                    className="profileImgPro"
                  />
                </div>
                <div className="ps-3">
                  <h1 className="profileName">Esthera Jackson</h1>
                  <p className="ratingPara"> </p>
                  <div>
                    <Badge
                      color="success"
                      overlap="circular"
                      badgeContent={<img src="./img/yestick.png" alt="img" />}
                      className="me-2"
                    >
                      <img src="./img/badges.png" alt="img" />
                    </Badge>
                    <Badge
                      color="success"
                      overlap="circular"
                      badgeContent={<img src="./img/yestick.png" alt="img" />}
                      className="me-2"
                    >
                      <img src="./img/badges.png" alt="img" />
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <button className="probtn">
                  {" "}
                  <img src="./img/arrow-down-left.png" alt="img" /> Invite To
                  Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveiwAndDescrip mt-3">
        <div className="container profilBoxOuter">
          <div className="row g-0">
            <div className="borderbottom d-flex align-items-center">
              <div>
                <h1 className="profileH1">profile</h1>
                <p className="ProfilePara">
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).{" "}
                  <span className="showLess">Show less</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-12 d-flex justify-content-between">
              <div className="profileBox">
                <div className="mt-4">
                  <p className="fullName">
                    Category : <span>Designer</span>
                  </p>
                  <p className="fullName">
                    Sub Category : <span> UI Designer</span>
                  </p>
                  <p className="fullName">
                    Location : <span> United States</span>
                  </p>
                  <p className="fullName">
                    Zip code : <span> 1127</span>
                  </p>
                  <p className="fullName">
                    Social Media :
                    <span className="">
                      &nbsp;
                      <img src="./img/fb.png" alt="img" />
                      &nbsp;
                      <img src="./img/twi.png" alt="img" />
                      &nbsp;
                      <img src="./img/insta.png" alt="img" />
                    </span>
                  </p>
                  <p className="fullName">
                    Skill : <span> Skill1</span>
                    <span> Skill2</span>
                    <span> Skill3</span>
                  </p>
                </div>
              </div>
              <div className="profileBox">
                <div className="mt-4">
                  <p className="fullName">
                    <span> Rated : 4.8</span>
                  </p>
                  <p className="fullName">
                    <span>Working Since: 22, August, 2021 </span>
                  </p>
                  <p className="fullName">
                    <span> Offer Service: Remote, In office </span>
                  </p>
                  <p className="fullName">
                    <span> Total Job: 11</span>
                  </p>
                  <p className="fullName">
                    <span>Payment Method: </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 my-4">
              <div className="profileBoxRightside">
                <div className="d-flex justify-content-between">
                  <h1 className="reviewText">Reviews</h1>
                  <h1 className="viewText">View All</h1>
                </div>
                <div className="reviewbox ">
                  <div className="container test ">
                    <div className="row box-relative">
                      <div className="col-2 col-lg-1 col-md-1  d-flex align-items-start justify-content-center ">
                        <img
                          src="./img/CreditsReview.png "
                          alt="img"
                          className="img-fluid bordrImg "
                        />
                      </div>
                      <div className="col-10  ">
                        <div className="d-flex align-items-center">
                          <h1 className="userNameh1 mt-2 pe-3">User name</h1>
                          <Rating name="no-value" value={null} />
                        </div>
                        <p className="Reviewpara">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,{" "}
                        </p>
                      </div>
                      <div className="box-abolute">
                        <div className="d-flex align-items-center ">
                          <img src="./img/Oval.png" alt="img" />
                          <h1 className="absolutePara">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container test ">
                    <div className="row box-relative">
                      <div className="col-2  col-lg-1 col-md-1  d-flex align-items-start justify-content-center ">
                        <img
                          src="./img/CreditsReview.png "
                          alt="img"
                          className="img-fluid bordrImg "
                        />
                      </div>
                      <div className="col-10  ">
                        <div className="d-flex align-items-center">
                          <h1 className="userNameh1 mt-2 pe-3">User name</h1>
                          <Rating name="no-value" value={null} />
                        </div>
                        <p className="Reviewpara">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,{" "}
                        </p>
                      </div>
                      <div className="box-abolute">
                        <div className="d-flex align-items-center ">
                          <img src="./img/Oval.png" alt="img" />
                          <h1 className="absolutePara">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profileBoxRightside mt-3">
                <div className="d-flex justify-content-between">
                  <h1 className="reviewText">Recommendations</h1>
                  <h1 className="viewText">View All</h1>
                </div>
                <div className="reviewbox ">
                  <div className="container test ">
                    <div className="row box-relative">
                      <div className="col-2  col-lg-1 col-md-1  d-flex align-items-start justify-content-center ">
                        <img
                          src="./img/CreditsReview.png "
                          alt="img"
                          className="img-fluid bordrImg "
                        />
                      </div>
                      <div className="col-10  ">
                        <div className="d-flex align-items-center">
                          <h1 className="userNameh1 mt-2 pe-3">User name</h1>
                          <Rating name="no-value" value={null} />
                        </div>
                        <p className="Reviewpara">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container test ">
                    <div className="row box-relative">
                      <div className="col-2  col-lg-1 col-md-1  d-flex align-items-start justify-content-center ">
                        <img
                          src="./img/CreditsReview.png "
                          alt="img"
                          className="img-fluid bordrImg "
                        />
                      </div>
                      <div className="col-10  ">
                        <div className="d-flex align-items-center">
                          <h1 className="userNameh1 mt-2 pe-3">User name</h1>
                          <Rating name="no-value" value={null} />
                        </div>
                        <p className="Reviewpara">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Googlemap />

      <section className="sliderSection my-4">
        <div className="container">
          <Carousel>
          
            <Carousel.Item>
             <div className="sliderImgDiv">
             <img
                className="d-block sliderImgs "
                src="./img/Dashboard1.png"
                alt="Second slide"
              />
               <img
                className="d-block sliderImgs"
                src="./img/Dashboard1.png"
                alt="Second slide"
              />
             </div>

              <Carousel.Caption>
                <div className="sliderblackBox">
                <div className="blackboxHeroSlider">
            <h1 className="blackboxH1 text-start">Project Tite</h1>
            <p className="blackboxPara text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
          </div>

                </div>
            
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
             <div className="sliderImgDiv">
             <img
                className="d-block sliderImgs "
                src="./img/Dashboard1.png"
                alt="Second slide"
              />
               <img
                className="d-block sliderImgs"
                src="./img/Dashboard1.png"
                alt="Second slide"
              />
             </div>

              <Carousel.Caption>
                <div className="sliderblackBox">
                <div className="blackboxHeroSlider">
            <h1 className="blackboxH1 text-start">Project Tite</h1>
            <p className="blackboxPara text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
          </div>

                </div>
            
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profileprofessional;
