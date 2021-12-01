import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Completeproject = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Menu />
      <section className="dashboardTabs">
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer ">
              <img src="./img/DashboardBlack.png" alt="img" /> &nbsp; dashboard
            </div>

            <div className="tabsCustomer tabcusActive">
              {" "}
              <img src="./img/MyProjectsred.png" alt="img" /> &nbsp; My Project
            </div>
            <div className="tabsCustomer">
              <img src="./img/Vectormsg.png" alt="img" /> &nbsp; Messages
            </div>
            <div className="tabsCustomer">
              <img src="./img/FindProfessionals.png" alt="img" />&nbsp;Find
              Professional
            </div>
          </div>
        </div>
      </section>

      <section className="tabsection">
        <div className="container">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Completed Projects" {...a11yProps(0)} />
                <Tab label="Posted Projects" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="boxComplete">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="boxComplete mt-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div className="boxComplete mt-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="boxComplete mt-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="boxComplete mt-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="boxComplete mt-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="boxComplete mt-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category Name: <span>Name here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Awarded: <span>$ 600</span>
                  </p>
                </div>

                <div className="boxRight ">
                  <div>
                    <p className="boxComplete-Para">
                      Professional Name: <span>Name here</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2">
                      Duration: <span> 21-10-2021 to 22-10-2021</span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              <div className=" mt-3 text-end">
                <button className=" btnProfileEditViewmore">
                  View More <span><img src="./img/chevronright.png" alt="img" /></span> 
                </button>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="boxComplete">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category name: <br /> <span>Posting time here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Project Details: <br />
                    <span className="postedSpanPara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing{" "}
                    </span>
                  </p>
                </div>

                <div className="boxRightPostedProject ">
                  <div>
                    <p className="boxComplete-Para">
                      Price: <span>Fixed</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Deadline: <span> 21-10-2021 to 22-10-2021 </span>
                    </p>
                    <p className="boxComplete-para2">
                      Total proposal: <span> 2 </span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div className="boxComplete my-3">
                <div className="boxleft">
                  <h1 className="boxComplete-h1">Project Title</h1>
                  <p className="boxComplete-Para">
                    Category name: <br /> <span>Posting time here</span>
                  </p>
                  <p className="boxComplete-para2">
                    Project Details: <br />
                    <span className="postedSpanPara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing{" "}
                    </span>
                  </p>
                </div>

                <div className="boxRightPostedProject ">
                  <div>
                    <p className="boxComplete-Para">
                      Price: <span>Fixed</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Amount: <span>$ 600</span>
                    </p>
                    <p className="boxComplete-para2 mb-1">
                      Deadline: <span> 21-10-2021 to 22-10-2021 </span>
                    </p>
                    <p className="boxComplete-para2">
                      Total proposal: <span> 2 </span>
                    </p>
                  </div>

                  <div>
                    <button className="btnProfileEdit me-4">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Completeproject;
