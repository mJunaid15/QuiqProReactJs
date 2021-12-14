import React from "react";
import Navmenu from "../components/Navmenu";
import Sidebar from "../components/Sidebar";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Adminmanagmentlist = () => {
  const boxShadow = {
    boxShadow: " 0px 4px 2px rgba(231, 232, 233, 0.25)",
  };
  return (
    <>
      <section className="dashboardSection">
        <div className="conatiner-fluid">
          <div className="row g-1">
            <div className="col-12 col-md-4 col-lg-3 border-end">
              <Sidebar />
            </div>

            <div className="col-12 col-md-8 col-lg-9 ">
              <Navmenu />

              <section className="userNameSection d-flex align-items-center">
                <p className="adminNavigation">
                  Home / Admin Management / Admin List
                </p>
              </section>
              <section className="">
                <div className="container p-2 mt-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="listofadmin">List of Admins</p>
                  </div>

                  <div className="searchDivadmin">
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
                        placeholder="Search by skills"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                </div>

                <div className="container p-2" style={{height:"100vh"}}>
                  <div className="row " style={boxShadow}>
                    <div className="col-12 col-md-6 col-lg-3">
                      <input
                        class="styled-checkbox"
                        id="styled-checkbox-1"
                        type="checkbox"
                        value="value1"
                      />
                      <label for="styled-checkbox-1" className="adminName">
                        Admin Name (Email)
                      </label>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle">Registeration Date</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle">Phone</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle">Action</p>
                    </div>
                  </div>

                  <div
                    className="row d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-22"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className=" recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                          <div className="circleRecenttask"></div>

                          <p className="mb-0 circleRecentPara">
                            Samanta William
                            <h1 className=" mb-0 timeLite">
                              samantha@mail.com
                            </h1>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Action"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>


                  <div
                    className="row d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-2"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-2" className=""></label>

                        <div className=" recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                          <div className="circleRecenttask"></div>

                          <p className="mb-0 circleRecentPara">
                            Samanta William
                            <h1 className=" mb-0 timeLite">
                              samantha@mail.com
                            </h1>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Action"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>


                  <div
                    className="row d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-3"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-3" className=""></label>

                        <div className=" recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                          <div className="circleRecenttask"></div>

                          <p className="mb-0 circleRecentPara">
                            Samanta William
                            <h1 className=" mb-0 timeLite">
                              samantha@mail.com
                            </h1>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Action"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>

                  <div
                    className="row d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-4"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-4" className=""></label>

                        <div className=" recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
                          <div className="circleRecenttask"></div>

                          <p className="mb-0 circleRecentPara">
                            Samanta William
                            <h1 className=" mb-0 timeLite">
                              samantha@mail.com
                            </h1>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Action"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>

                  
                </div>
                <div className="py-3 ">
                        <p className="mb-0 showing15 p-lg-3">
                          Showing <strong className="text-dark">1-5</strong>{" "}
                          from <strong className="text-dark">100</strong> data
                        </p>
                      </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adminmanagmentlist;
