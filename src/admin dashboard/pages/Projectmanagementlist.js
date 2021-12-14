import React from 'react';
import Navmenu from "../components/Navmenu";
import Sidebar from "../components/Sidebar";
import { DropdownButton, Dropdown ,Form} from "react-bootstrap";


const Projectmanagementlist = () => {
    const boxShadow = {
        boxShadow: " 0px 4px 2px rgba(231, 232, 233, 0.25)",
      };
    return (
        <>
           <section className="dashboardSection">
        <div className="conatiner-fluid">
          <div className="row g-1">
            <div className="col-12 col-md-4 col-lg-3 ">
              <Sidebar />
            </div>

            <div className="col-12 col-md-8 col-lg-9 ">
              <Navmenu />

              <section className="userNameSection d-flex align-items-center ">
                <p className="adminNavigation">
                  Home / Project Management / Project List
                </p>
              </section>
              <section className="border-start">
                <div className="container p-2 mt-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="listofadmin">List of Projects</p>
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

                <div className="container p-2" >
                  <div className="row g-0 " style={boxShadow}>
                    <div className="col-12 col-md-12 col-lg-3">
                      <input
                        class="styled-checkbox"
                        id="styled-checkbox-1"
                        type="checkbox"
                        value="value1"
                      />
                      <label for="styled-checkbox-1" className="adminName">
                      Title  (Posted by)
                      </label>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="registertitle">Category (subcategory)</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Project Type</p>
                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Location (zipcode)</p>
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
                          id="styled-checkbox-0"
                          type="checkbox"
                          value="value1"
                          checked
                        />

                        <label for="styled-checkbox-0" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-01"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-01" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-03"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-03" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-04"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-04" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-05"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-05" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-06"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-06" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-07"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-07" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
                          id="styled-checkbox-08"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-08" className=""></label>

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
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          Category Name
                          <h1 className=" mb-0 timeLite">Sub category name</h1>
                        </p>
                      </p>
                    </div>
                   
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">Fixed</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle mb-0">
                        New york,America <br />
                        1127
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
    )
}

export default Projectmanagementlist
