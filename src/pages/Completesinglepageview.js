import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Rating from "@mui/material/Rating";

const Completesinglepageview = () => {
  return (
    <>
      <Menu />
      <section className="">
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer ">dashboard</div>

            <div className="tabsCustomer tabcusActive">My Project</div>
            <div className="tabsCustomer">Messages</div>
            <div className="tabsCustomer">Post a job</div>
            <div className="tabsCustomer">Find Master</div>
          </div>
        </div>
      </section>
      <section className="buyCreditSection mt-2">
        <div className="container buycreDiv">
          <p className="navigate">
            Home / My project / Completed project /{" "}
            <span className="activeNavigate">Name of Project</span>
          </p>
          <p className="navigatePara">
            Form pages are used to collect or verify information to users, and
            basic forms are common in scenarios where there are fewer data
            items.
          </p>
        </div>
      </section>

      <section className="completeSingleBoxSection mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8">
              <div className="completeSingleBox">
                <h1 className="boxComplete-h1">Project Title</h1>
                <p className="boxComplete-Para">
                  Category Name: <span>Posting time here</span>
                </p>
                <p className="boxComplete-Para">
                  Project Type: <span>One time project</span>
                </p>
                <p className="boxComplete-para2">
                  Project Requirments:{" "}
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing{" "}
                  </span>
                </p>

                <div className="skillrequired">
                  <h5 className="skillrequireh5">Skills Require:</h5>
                  <div className="container ">
                    <div className="row g-0">
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                    </div>
                    <div className="row mt-3 g-0">
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skillrequired">
                  <h5 className="skillrequireh5 pt-2">Others:</h5>
                  <div className="container ">
                    <div className="row mt-3 g-0">
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2">
                        <button className="skillbtn">Skill name</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectAwarded mt-3">
                <div className="container">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Status : <span>--</span>
                  </p>
                  <p className="boxComplete-Para">
                    Amount : <span>$ 600</span>
                  </p>
                  <p className="boxComplete-Para">
                    Status : <span>Complete</span>
                  </p>
                </div>
              </div>

              <div className="reviewCompletesingle mt-3">
                <div className="profileBoxRightside">
                  <div className="d-flex justify-content-between">
                    <h1 className="reviewTextComplete">Reviews</h1>
                    {/* <h1 className="viewText">View All</h1> */}
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
                            <h1 className="absolutePara">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="messageBox my-3">
                <h1 className="chattext">Chat</h1>
                <div className="commentsDiv">
                  <div className="innerCommentDiv">
                    <img
                      src="./img/CreditsReview.png "
                      alt="img"
                      className="img-fluid bordrImg me-3 "
                    />
                    <p
                      className="chatPara p-2 mt-lg-3 mt-sm-0"
                      style={{ background: " #F9FCFF" }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div>
                    <p className="timing text-center">
                      4-Apr-21 &nbsp; 7:00 pm
                    </p>
                  </div>

                  <div className="innerCommentDiv">
                    <p
                      className="chatPara p-2 mt-lg-3 mt-sm-0"
                      style={{ background: " #F9FCFF" }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <img
                      src="./img/Ellipse24.png"
                      alt="img"
                      className="img-fluid bordrImg ms-3"
                    />
                  </div>
                  <div>
                    <p className="timing text-center">
                      4-Apr-21 &nbsp; 7:00 pm
                    </p>
                  </div>
                  <div className="innerCommentDiv">
                    <p
                      className="chatPara p-2 mt-lg-3 mt-sm-0"
                      style={{ background: " #F9FCFF" }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <img
                      src="./img/Ellipse24.png"
                      alt="img"
                      className="img-fluid bordrImg ms-3 "
                    />
                  </div>
                  <div>
                    <p className="timing text-center">
                      4-Apr-21 &nbsp; 7:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="cardCompletesingle">
                <img
                  src="./img/CreditsReview.png "
                  alt="img"
                  className="img-fluid bordrImg  "
                />
                <h1 className="proH1">Professional Name</h1>
                <h2 className="proH2">About the client</h2>
                <Rating name="size-small" defaultValue={2} size="small" />
                <p className="proPara">Area/ City: <br />
                <span>city name.</span>
                </p>
                <p className="proPara">Job Completed: <br />
                <span>53.</span>
                </p>
                


              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Completesinglepageview;
