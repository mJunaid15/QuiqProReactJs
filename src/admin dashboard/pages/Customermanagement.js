import React from "react";
import Navmenu from "../components/Navmenu";
import Sidebar from "../components/Sidebar";
import { DropdownButton, Dropdown ,Form} from "react-bootstrap";


const Customermanagement = () => {
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
                  Home / Customer Management / Customer List
                </p>
              </section>
              <section className="">
                <div className="container p-2 mt-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="listofadmin">List of Customers</p>
                  </div>

                  <div className="searchDivadmin d-flex">
                    <div className=" inputField me-4">
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
                        placeholder="Search "
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div style={{width:"25%"}}>
                    <Form.Select aria-label="10" className="shadow-none">
                      <option>10</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  </div>
                </div>

                <div className="container p-2" style={{ height: "100vh" }}>
                  <div className="row g-0 " style={boxShadow}>
                    <div className="col-12 col-md-12 col-lg-3">
                      <input
                        class="styled-checkbox"
                        id="styled-checkbox-1"
                        type="checkbox"
                        value="value1"
                      />
                      <label for="styled-checkbox-1" className="adminName">
                        Name (Email)
                      </label>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Registeration Date</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Phone</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Location (zipcode)</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="registertitle">Status</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Action</p>
                    </div>
                  </div>

                  <div
                    className="row g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-12 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-22"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className="ps-0 recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
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
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                         1127
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                      Verified
                      <img src="./img/verifygreen.png" alt="img" />
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <DropdownButton id="dropdown-basic-button" title="Action">
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
                    className="row g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-12 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-23"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className="ps-0 recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
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
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                         1127
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                      Verified
                      <img src="./img/verifygreen.png" alt="img" />
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <DropdownButton id="dropdown-basic-button" title="Action">
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
                    className="row g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-12 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-24"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className="ps-0 recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
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
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                         1127
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                      Verified
                      <img src="./img/verifygreen.png" alt="img" />
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <DropdownButton id="dropdown-basic-button" title="Action">
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
                    className="row g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-12 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-25"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className="ps-0 recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
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
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                         1127
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                      Verified
                      <img src="./img/verifygreen.png" alt="img" />
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <DropdownButton id="dropdown-basic-button" title="Action">
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
                    className="row g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-12 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-26"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className="ps-0 recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
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
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                         1127
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                      Verified
                      <img src="./img/verifygreen.png" alt="img" />
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <DropdownButton id="dropdown-basic-button" title="Action">
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
                    className="row g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                    <div className="col-12 col-md-12 col-lg-3">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-27"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-22" className=""></label>

                        <div className="ps-0 recentTicketsRow d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center">
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
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">March 25, 2021</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">03123456789</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                         1127
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                      Verified
                      <img src="./img/verifygreen.png" alt="img" />
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-2">
                      <DropdownButton id="dropdown-basic-button" title="Action">
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
             
              </section>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customermanagement;
