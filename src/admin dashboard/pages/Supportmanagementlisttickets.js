import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navmenu from "../components/Navmenu";
import Sidebar from "../components/Sidebar";
import { DropdownButton, Dropdown ,Form} from "react-bootstrap";






function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const Supportmanagementlisttickets = () => {
    const boxShadow = {
        boxShadow: " 0px 4px 2px rgba(231, 232, 233, 0.25)",
      };
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                  Home / Support Management / List of tickets
                </p>
              </section>
              <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Customer" {...a11yProps(0)} />
          <Tab label="Professional" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      <section className="" style={{ height: "100%" }}>
                <div className="container p-2 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="listofadmin">List of Sub Category</p>
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

                <div className="container p-2">
                  <div className="row g-0  " style={boxShadow}>
                  <div className="col-12 col-md-12 col-lg-2">
                      
                      <input
                        class="styled-checkbox"
                        id="styled-checkbox-1"
                        type="checkbox"
                        value="value1"
                      />
                      <label for="styled-checkbox-1" className="adminName">
                      Ticket No
                      </label>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                    <p className="registertitle"> User Name </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="registertitle">Inquiry Question</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Date (Time)</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="registertitle">Status</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="registertitle">Action</p>
                    </div>
                   
                  </div>

                  <div
                    className="row p-2 ps-0 g-0 d-flex align-items-center mt-3"
                    style={boxShadow}
                  >
                       <div className="col-12 col-md-12 col-lg-2">
                      <div className="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="styled-checkbox-0"
                          type="checkbox"
                          value="value1"
                        />

                        <label for="styled-checkbox-0" className=""></label>

                        <p
                          className="registertitle mb-0 "
                          style={{ fontWeight: "500" }}
                        >
                          123454
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <div className="d-flex align-items-center">
                      
                        <p
                          className="registertitle mb-0 "
                          style={{ fontWeight: "400" }}
                        >
                          User name 
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                      <p className="marchTitle mb-0"> Lorem Ipsum is simply dummy text of the printing and typesetting industr
                          <h1 className=" mb-0 timeLite">March 25, 2021</h1>
                        {" "}
                        <p className="mb-0 circleRecentPara">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industr
                          <h1 className=" mb-0 timeLite"></h1>
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="mb-0 circleRecentPara">
                        <h1 className=" mb-0 timeLite">On site</h1>
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                        Active
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
                    className="row p-2 g-0 d-flex align-items-center mt-3"
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

                        <p
                          className="registertitle mb-0 "
                          style={{ fontWeight: "500" }}
                        >
                          Sub Category
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <div className="d-flex align-items-center">
                      
                        <p
                          className="registertitle mb-0 "
                          style={{ fontWeight: "400" }}
                        >
                          Category 
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="marchTitle mb-0">
                        {" "}
                        <p className="mb-0 circleRecentPara">
                          <h1 className=" mb-0 timeLite">March 25, 2021</h1>
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2">
                      <p className="mb-0 circleRecentPara">
                        <h1 className=" mb-0 timeLite">On site</h1>
                      </p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-1">
                      <p className="verifyTitle mb-0">
                        Active
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
   
    </Box>


            </div>
          </div>
        </div>
      </section>
               
        </>
    )
}

export default Supportmanagementlisttickets
