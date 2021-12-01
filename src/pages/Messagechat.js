import React from "react";
import Menu from "../components/Menu";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";



const Messagechat = () => {
  return (
    <>
      <Menu />
      <section className="dashboardTabs pt-3">
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer ">
              <img src="./img/DashboardBlack.png" alt="img" /> &nbsp; dashboard
            </div>

            <div className="tabsCustomer ">
              {" "}
              <img src="./img/MyProjects.png" alt="img" /> &nbsp; My Project
            </div>
            <div className="tabsCustomer tabcusActive">
              <img src="./img/message-squarered.png" alt="img" /> &nbsp; Messages
            </div>
            <div className="tabsCustomer ">
              <img src="./img/FindProfessionals.png" alt="img" />&nbsp;Find
              Professional
            </div>
          </div>
        </div>
      </section>

      <section className="chatboxsection">
        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-3 ">
              <div className="messageChatUsername">
                <img
                  src="./img/CreditsReview.png "
                  alt="img"
                  className="img-fluid bordrImg  "
                />
                <h1 className="proH1">User Name</h1>
                <h2 className="proH2">About the client</h2>
                <Rating name="size-small" defaultValue={2} size="small" />
                <p className="proPara">
                  Area/ City: <br />
                  <span>city name.</span>
                </p>
                <p className="proPara">
                  Job Completed: <br />
                  <span>53.</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="chatboxDiv">
                <div className=" my-3">
                  {/* <h1 className="chattext">Chat</h1> */}
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

                    {/* <div className="innerCommentDiv">
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
                    </div> */}
                  </div>
                </div>
                
                <div className="">
                  <div className="mb-3 inputField">
                    <input
                      type="text"
                      className="form-control inputcus"
                      placeholder="Enter your message"
                      id="exampleInputPassword1"
                    />
                    <span className="mediaInput">
                      <label for="file">
                      <img src="./img/media.png" alt="img" style={{cursor:"pointer"}} />
                        <input
                          type="file"
                          id="file"
                          style={{ display: "none" }}
                          name="image"
                          accept="image/gif,image/jpeg,image/jpg,image/png"
                          multiple=""
                          data-original-title="upload photos"
                        />
                      </label>
                     
                    </span>
                    <span className="smileInput">
                      <img src="./img/smile.png" alt="img"  />
                    </span>
                    <span className="btnSendInput">
                    <button type="button" className="btn btn-primary">Send</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
            <div className="chatSeacrhDiv">
                  
                    <div className=" inputField">
                      <span className="iconsInput">
                        <img
                          src="./img/searchIcon.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </span>
                      <input
                        type="email"
                        className="form-control inputcusFilter"
                        placeholder="Search Chat"
                        id="exampleInputPassword1"
                      />
                     
                    </div>
                  

                  <div className="headerRead">
                   <div className="unreadDiv">
                       <h1 >Unread <img src="./img/downChevron.png" alt="img" /></h1>
                   </div>
                   <div className="Markasread">
                       <h1 >Mark as read <img src="./img/checked.png" alt="img" /></h1>
                   </div>
    
                  </div>

                  <div className="masterNameDiv">
                      <h1 className="masterNameh1">
                      Master Name
                      </h1>
                      <p className="masterPara">
                      consumernameId
                      </p>
                  </div>
                  <div className="masterNameDiv mt-3">
                      <h1 className="masterNameh1">
                      Master Name
                      </h1>
                      <p className="masterPara">
                      consumernameId
                      </p>
                  </div>
                  <div className="masterNameDiv mt-3">
                      <h1 className="masterNameh1">
                      Master Name
                      </h1>
                      <p className="masterPara">
                      consumernameId
                      </p>
                  </div>
                  <div className="masterNameDiv mt-3">
                      <h1 className="masterNameh1">
                      Master Name
                      </h1>
                      <p className="masterPara">
                      consumernameId
                      </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Messagechat;
