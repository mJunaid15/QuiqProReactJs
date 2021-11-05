import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Rating from "@mui/material/Rating";


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
            <p className="blackboxPara" >
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
                  <p className="ratingPara">Rated: 4.5 </p>
                </div>
              </div>

              <div>
                <button className="probtn">Hire</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveiwAndDescrip mt-3">
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
                      creating an illusion of equality). <span className="showLess">Show less</span> 
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                <p className="fullName">
                Category :   <span>Designer</span>
                  </p>
                  <p className="fullName">
                  Sub Category : <span>  UI Designer</span>
                  </p>
                  <p className="fullName">
                    Location : <span> United States</span>
                  </p>
                  <p className="fullName">
                  Zip code :  <span>  1127</span>
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
                  Skill :  <span>  Skill1</span><span>  Skill2</span><span>  Skill3</span>
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

export default Profileprofessional;
