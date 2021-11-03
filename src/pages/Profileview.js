import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";
import Rating from "@mui/material/Rating";

const Profileview = () => {
  return (
    <>
      <Menu />
      <Navigate pagename=" Buy Credits" home="Home" />

      <section className="profilesection">
        <div className="container circlerow ">
          <div className="d-flex align-items-center">
            <div className="circleimg">
              <img src="./img/Oval (1).png" alt="img" className="img-fluid" />
            </div>
            <div className="ps-3">
              <h1 className="profileName">Esthera Jackson</h1>
              <p className="ratingPara">Rated: 4.5 </p>
            </div>
          </div>

          <div>
            <p className="profilePara ">
              <img src="./img/pana.png" alt="img" className="pe-2" /> PROJECTS
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container profilBoxOuter">
          <div className="row g-0">
            <div className="col-12 col-md-6  col-lg-6">
              <div className="profileBox">
                <div className="borderbottom d-flex align-items-center">
                  <div>
                    <h1 className="profileH1">profile</h1>
                    <p className="ProfilePara">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                      answer is no. If two equally difficult paths, choose the
                      one more painful in the short term (pain avoidance is
                      creating an illusion of equality). Show less
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="fullName">
                    Full Name: <span>Alec M. Thompson</span>
                  </p>
                  <p className="fullName">
                    Location: <span> United States</span>
                  </p>
                  <p className="fullName">
                    Social Media:
                    <span className="">
                      &nbsp;
                      <img src="./img/fb.png" alt="img" />
                      &nbsp;
                      <img src="./img/twi.png" alt="img" />
                      &nbsp;
                      <img src="./img/insta.png" alt="img" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="profileBoxRightside">
                <div className="d-flex justify-content-between">
                  <h1 className="reviewText">Reviews</h1>
                  <h1 className="viewText">View All</h1>
                </div>
                <div className="reviewbox ">
                  <div className="container test ">
                    <div className="row box-relative">
                      <div className="col-2  d-flex align-items-start justify-content-center ">
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
                        <h1 className="absolutePara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                      </div>
                    </div>
                    </div>

                    

                    

                   



                  </div>
                  <div className="container test ">
                    <div className="row box-relative">
                      <div className="col-2  d-flex align-items-start justify-content-center ">
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
                        <h1 className="absolutePara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                      </div>
                    </div>
                    </div>

                    

                    

                   



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

export default Profileview;
