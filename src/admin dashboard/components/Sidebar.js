import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  DropdownButton,
  useAccordionButton,
  Accordion,
} from "react-bootstrap";

const Sidebar = () => {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    console.log(key);
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  return (
    <>
      <section className="sidebarSection">
        <div className="container-fluid mt-3">
          <div className=" text-center my-5">
            <img src="./img/logo.png" alt="logo" className="img-fluid" />
          </div>
          <Accordion>
            
            <Accordion.Item eventKey="0" className=" border-0 "  style={
                  currentActiveKey === "0"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("0");
                }}>
              <button className="defaultDashboardbtn">
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "0"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "0"
                        ? "./img/dashboardBox.png"
                        : "./img/dashboardboxBlue.png"
                    }
                    alt="img"
                  />{" "}
                    Dashboard
                </span>

              </button>
             
            </Accordion.Item>

            <Accordion.Item eventKey="1" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "1"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("1");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "1"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "1"
                        ? "./img/dashboardBox.png"
                        : "./img/Dashboarduserblue.png"
                    }
                    alt="img"
                  />{" "}
                  Admin Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "2"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("2");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "2"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "2"
                        ? "./img/dashboardBox.png"
                        : "./img/userscustomerblue.png"
                    }
                    alt="img"
                  />{" "}
                  Customer Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "3"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("3");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "3"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "3"
                        ? "./img/dashboardBox.png"
                        : "./img/userscustomerblue.png"
                    }
                    alt="img"
                  />{" "}
                  Professional Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "4"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("4");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "4"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "4"
                        ? "./img/dashboardBox.png"
                        : "./img/serverblue.png"
                    }
                    alt="img"
                  />{" "}
                  Project Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "5"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("5");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "5"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "5"
                        ? "./img/dashboardBox.png"
                        : "./img/copyBlue.png"
                    }
                    alt="img"
                  />{" "}
                  Category Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "6"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("6");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "6"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "6"
                        ? "./img/dashboardBox.png"
                        : "./img/packageBlue.png"
                    }
                    alt="img"
                  />{" "}
                  Support Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "7"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("7");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "7"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "7"
                        ? "./img/dashboardBox.png"
                        : "./img/dollar-signblue.png"
                    }
                    alt="img"
                  />{" "}
                  Credits Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "8"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("8");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "8"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "8"
                        ? "./img/dashboardBox.png"
                        : "./img/loaderblue.png"
                    }
                    alt="img"
                  />{" "}
                  Ads Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "9"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("9");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "9"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "9"
                        ? "./img/dashboardBox.png"
                        : "./img/trelloBlue.png"
                    }
                    alt="img"
                  />{" "}
                  Report Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "10"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("10");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "10"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "10"
                        ? "./img/dashboardBox.png"
                        : "./img/file-textblue.png"
                    }
                    alt="img"
                  />{" "}
                  Inquiry Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "11"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("11");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "11"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "11"
                        ? "./img/dashboardBox.png"
                        : "./img/mailblue.png"
                    }
                    alt="img"
                  />{" "}
                  Email Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "12"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("12");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "12"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "12"
                        ? "./img/dashboardBox.png"
                        : "./img/toolblue.png"
                    }
                    alt="img"
                  />{" "}
                  Website Management
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13" className=" border-0 ">
              <Accordion.Header
                style={
                  currentActiveKey === "13"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("13");
                }}
              >
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "13"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "13"
                        ? "./img/dashboardBox.png"
                        : "./img/settingsblue.png"
                    }
                    alt="img"
                  />{" "}
                  Settings
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="dbPara">Lorem ipsum dolor sit amet,</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14" className=" border-0 "  style={
                  currentActiveKey === "14"
                    ? {
                        backgroundColor: "#2D408E",
                        borderRadius:"10px"
                      }
                    : {
                        color: "#fff  !important",
                      }
                }
                onClick={() => {
                  toggleActiveKey("14");
                }}>
              <button className="defaultDashboardbtn">
                <span
                  className="dbTitle"
                  style={
                    currentActiveKey === "14"
                      ? {
                          color: "#fff ",
                        }
                      : {
                          color: "#0a58ca",
                        }
                  }
                >
                  <img
                    src={
                      currentActiveKey === "14"
                        ? "./img/dashboardBox.png"
                        : "./img/log-outblue.png"
                    }
                    alt="img"
                  />{" "}
                  Log out
                </span>

              </button>
             
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
