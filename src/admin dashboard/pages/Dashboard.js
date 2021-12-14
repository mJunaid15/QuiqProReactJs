import React from "react";
import Navmenu from "../components/Navmenu";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <section className="dashboardSection">
        <div className="conatiner-fluid">
          <div className="row g-1">
            <div className="col-12 col-md-4 col-lg-3">
              <Sidebar />
            </div>

            <div className="col-12 col-md-8 col-lg-9">
              <Navmenu />

              <section className="userNameSection">
                <h5 className="userNAmeTitle">Hi,User Name</h5>
              </section>

              <section className="totalCustomerSection">
                <div className="container">
                  <div className="row text-lg-center">
                    <div className="col-12 col-md-6 col-lg-3 border-end">
                      <div class="">
                        <span className="counter">2,223,214</span>
                      </div>
                      <span class="counterLitePara">Total Customers</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 border-end">
                      <div class="">
                        <span className="counter">2,223,214</span>
                      </div>
                      <span class="counterLitePara">Total Professionals</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 border-end">
                      <div class="">
                        <span className="counter">2,223,214</span>
                      </div>
                      <span class="counterLitePara">Total Projects</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div class="">
                        <span className="counter">2,223,214</span>
                      </div>
                      <span class="counterLitePara">
                        Total C-buy Professionals
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="recentTicketsSection">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-8">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="recenTtickets">Recent Tickets</h5>
                        <span className="seeAllText">See all</span>
                      </div>

                      <div className="recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="circleRecenttask"></div>
                        <p className="mb-0 circleRecentPara">Samantha W.</p>
                        <p className="mb-0 circleRecentPara">Subject</p>
                        <p className="mb-0 circleRecentPara">
                          25 Jan, 2021
                          <h1 className=" mb-0 timeLite">04:34:45 AM</h1>
                        </p>
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/menuRecent.png" alt="img" />
                          </span>
                        </p>
                      </div>

                      <div className="recentTicketsRow recentTicketsRowgrey d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="circleRecenttask"></div>
                        <p className="mb-0 circleRecentPara">Samantha W.</p>
                        <p className="mb-0 circleRecentPara">Subject</p>
                        <p className="mb-0 circleRecentPara">
                          25 Jan, 2021
                          <h1 className=" mb-0 timeLite">04:34:45 AM</h1>
                        </p>
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/menuRecent.png" alt="img" />
                          </span>
                        </p>
                      </div>
                      <div className="recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="circleRecenttask"></div>
                        <p className="mb-0 circleRecentPara">Samantha W.</p>
                        <p className="mb-0 circleRecentPara">Subject</p>
                        <p className="mb-0 circleRecentPara">
                          25 Jan, 2021
                          <h1 className=" mb-0 timeLite">04:34:45 AM</h1>
                        </p>
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/menuRecent.png" alt="img" />
                          </span>
                        </p>
                      </div>

                      <div className="recentTicketsRow recentTicketsRowgrey d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="circleRecenttask"></div>
                        <p className="mb-0 circleRecentPara">Samantha W.</p>
                        <p className="mb-0 circleRecentPara">Subject</p>
                        <p className="mb-0 circleRecentPara">
                          25 Jan, 2021
                          <h1 className=" mb-0 timeLite">04:34:45 AM</h1>
                        </p>
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/menuRecent.png" alt="img" />
                          </span>
                        </p>
                      </div>

                      <div className="recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="circleRecenttask"></div>
                        <p className="mb-0 circleRecentPara">Samantha W.</p>
                        <p className="mb-0 circleRecentPara">Subject</p>
                        <p className="mb-0 circleRecentPara">
                          25 Jan, 2021
                          <h1 className=" mb-0 timeLite">04:34:45 AM</h1>
                        </p>
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/menuRecent.png" alt="img" />
                          </span>
                        </p>
                      </div>

                      <div className="recentTicketsRow recentTicketsRowgrey d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="circleRecenttask"></div>
                        <p className="mb-0 circleRecentPara">Samantha W.</p>
                        <p className="mb-0 circleRecentPara">Subject</p>
                        <p className="mb-0 circleRecentPara">
                          25 Jan, 2021
                          <h1 className=" mb-0 timeLite">04:34:45 AM</h1>
                        </p>
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/menuRecent.png" alt="img" />
                          </span>
                        </p>
                      </div>

                      <div className="py-3 ">
                        <p className="mb-0 showing15 p-lg-3">
                          Showing <strong className="text-dark">1-5</strong>{" "}
                          from <strong className="text-dark">100</strong> data
                        </p>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4 ">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="recenTtickets ps-4">Best Credits Buyers</h5>
                      </div>
                      <div className="karenHop d-flex justify-content-between align-items-center">
                       
                        <div className="w-100">
                          <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                       <div className="d-flex align-items-center">
                       <div className="circleRecenttask">
                          <img src="./img/peo1.png" alt="img" className="img-fluid" />
                        </div>
                        
                        <p className="mb-0 circleRecentPara ps-2">
                        Karen Hope
                          <h1 className=" mb-0 timeLite">City / State</h1>
                        </p>
                       </div>
                       
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/content.png" alt="img" />
                          </span>
                        </p>
                      </div>


                        </div>
                      </div>

                      <div className="karenHop  d-flex justify-content-between align-items-center">
                       
                        <div className="w-100">
                          <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                       <div className="d-flex align-items-center">
                       <div className="circleRecenttask">
                          <img src="./img/peo2.png" alt="img" className="img-fluid" />
                        </div>
                        
                        <p className="mb-0 circleRecentPara ps-2">
                        Karen Hope
                          <h1 className=" mb-0 timeLite">City / State</h1>
                        </p>
                       </div>
                       
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/content.png" alt="img" />
                          </span>
                        </p>
                      </div>


                        </div>
                      </div>


                      <div className="karenHop  d-flex justify-content-between align-items-center">
                       
                        <div className="w-100">
                          <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                       <div className="d-flex align-items-center">
                       <div className="circleRecenttask">
                          <img src="./img/peo3.png" alt="img" className="img-fluid" />
                        </div>
                        
                        <p className="mb-0 circleRecentPara ps-2">
                        Karen Hope
                          <h1 className=" mb-0 timeLite">City / State</h1>
                        </p>
                       </div>
                       
                        <p className="mb-0 circleRecentPara">
                          <span>
                            <img src="./img/content.png" alt="img" />
                          </span>
                        </p>
                      </div>


                        </div>
                      </div>

                      <div className="karenHop  d-flex justify-content-between align-items-center">
                       
                       <div className="w-100">
                         <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                      <div className="d-flex align-items-center">
                      <div className="circleRecenttask">
                         <img src="./img/peo4.png" alt="img" className="img-fluid" />
                       </div>
                       
                       <p className="mb-0 circleRecentPara ps-2">
                       Karen Hope
                         <h1 className=" mb-0 timeLite">City / State</h1>
                       </p>
                      </div>
                      
                       <p className="mb-0 circleRecentPara">
                         <span>
                           <img src="./img/contentNot.png" alt="img" />
                         </span>
                       </p>
                     </div>


                       </div>
                     </div>


                     <div className="karenHop  d-flex justify-content-between align-items-center">
                       
                       <div className="w-100">
                         <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                      <div className="d-flex align-items-center">
                      <div className="circleRecenttask">
                         <img src="./img/peo5.png" alt="img" className="img-fluid" />
                       </div>
                       
                       <p className="mb-0 circleRecentPara ps-2">
                       Karen Hope
                         <h1 className=" mb-0 timeLite">City / State</h1>
                       </p>
                      </div>
                      
                       <p className="mb-0 circleRecentPara">
                         <span>
                           <img src="./img/contentgrey.png" alt="img" />
                         </span>
                       </p>
                     </div>


                       </div>
                     </div>

                     <div className="karenHop  d-flex justify-content-between align-items-center">
                       
                       <div className="w-100">
                         <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                      <div className="d-flex align-items-center">
                      <div className="circleRecenttask">
                         <img src="./img/peo6.png" alt="img" className="img-fluid" />
                       </div>
                       
                       <p className="mb-0 circleRecentPara ps-2">
                       Karen Hope
                         <h1 className=" mb-0 timeLite">City / State</h1>
                       </p>
                      </div>
                      
                       <p className="mb-0 circleRecentPara">
                         <span>
                           <img src="./img/content.png" alt="img" />
                         </span>
                       </p>
                     </div>


                       </div>
                     </div>

                     
                     <div className="karenHop  d-flex justify-content-between align-items-center">
                       
                       <div className="w-100">
                         <div className="recentTicketsRow pt-2 d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                      <div className="d-flex align-items-center">
                      <div className="circleRecenttask">
                         <img src="./img/peo7.png" alt="img" className="img-fluid" />
                       </div>
                       
                       <p className="mb-0 circleRecentPara ps-2">
                       Karen Hope
                         <h1 className=" mb-0 timeLite">City / State</h1>
                       </p>
                      </div>
                      
                       <p className="mb-0 circleRecentPara">
                         <span>
                           <img src="./img/contentNot.png" alt="img" />
                         </span>
                       </p>
                     </div>


                       </div>
                     </div>


                     <div className="text-lg-center">
                       <button className="dashboardViewMore"> View more</button>
                     </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
