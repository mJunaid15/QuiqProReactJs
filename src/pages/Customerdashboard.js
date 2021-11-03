import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Rating from '@mui/material/Rating';


const Customerdashboard = () => {
  return (
    <>
      <Menu />
      <section className="customerdashboard">
        <div className="container">
          <h1 className="customerdashboardh1">Hi User Name,</h1>
        </div>
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer tabcusActive">dashboard</div>

            <div className="tabsCustomer">My Project</div>
            <div className="tabsCustomer">Messages</div>
            <div className="tabsCustomer">Post a job</div>
            <div className="tabsCustomer">Find Master</div>
          </div>
        </div>
      </section>

      <section className="recordDatasection">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-9">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="inprogresdiv">
                    <img src="./img/Icon.png" alt="img" />
                    <div className="ps-3">
                      <span>In Progress</span>
                      <h1>350</h1>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="inprogresdiv">
                    <img src="./img/Icon (1).png" alt="img" />
                    <div className="ps-3">
                      <span>Assigned</span>
                      <h1>450</h1>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="inprogresdiv">
                    <img src="./img/Icon (2).png" alt="img" />
                    <div className="ps-3">
                      <span>closed</span>
                      <h1>3500</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ongoingdiv mt-lg-5">
                <div className="d-flex justify-content-between">
                  <h1 className="ongoingh1">On Going Projects</h1>
                  <h2 className="ongoingh2">View All</h2>
                </div>

                <div className="tableWidth">
                  <div className="tableDiv ps-2">
                    <h1 className="tableColh1">Project Name </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">Deposite</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">Deadline </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">Status</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1"></h1>
                  </div>
                </div>
                <div className="tableWidthwhite">
                  <div className="tableDiv ps-2">
                    <h1 className="tableColh1">
                      Project Name <span>Category</span>{" "}
                    </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">$ 50,036</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">
                      25 Jan, 2021 <span>04:34:45 AM</span>{" "}
                    </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1 text-danger">Canceled</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">
                      <MoreHorizIcon />
                    </h1>
                  </div>
                </div>
                <div className="tableWidthwhite">
                  <div className="tableDiv ps-2">
                    <h1 className="tableColh1">
                      Project Name <span>Category</span>{" "}
                    </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">$ 50,036</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">
                      25 Jan, 2021 <span>04:34:45 AM</span>{" "}
                    </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1 text-muted">Pending</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">
                      <MoreHorizIcon />
                    </h1>
                  </div>
                </div>
                <div className="tableWidthwhite">
                  <div className="tableDiv ps-2">
                    <h1 className="tableColh1">
                      Project Name <span>Category</span>{" "}
                    </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">$ 50,036</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">
                      25 Jan, 2021 <span>04:34:45 AM</span>{" "}
                    </h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1 text-success">Completed</h1>
                  </div>
                  <div className="tableDiv ">
                    <h1 className="tableColh1">
                      <MoreHorizIcon />
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 col-lg-3">
              <div className="leaderboardcard">
                <div className="d-flex flex-row justify-content-between">
                  <h1 className="topH1leaderboard">Leaderboard</h1>
                  <img src="./img/Calendar.png" alt="png" />
                </div>
                <div className="text-center mt-2">
                  <h1 className="leaderUsername ">User Name</h1>
                 
                  <div className="text-center my-4">
                      <img src="./img/Ellipse 23.png" alt="img-" />
                  </div>
                  <Rating name="no-value" value={null} />
                  <h1 className="creditsheading mt-2">Credits : 20</h1>
                </div>
              </div>

              <div className="badgesDiv mt-3">
               
                <h1 className="badgesheading"> Badges & Award</h1>

                <div className="badgesArea mt-2">
                    <img src="./img/Group 5.png" alt="img" /> &nbsp;
                    Badges
                </div>
                <div className="badgesArea mt-2">
                    <img src="./img/Group 5.png" alt="img" /> &nbsp;
                    Badges
                </div>
                <div className="badgesArea mt-2">
                    <img src="./img/Group 5.png" alt="img" /> &nbsp;
                    Badges
                </div>
                <div className="badgesArea mt-2">
                    <img src="./img/Group 5.png" alt="img" /> &nbsp;
                    Badges
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

export default Customerdashboard;
