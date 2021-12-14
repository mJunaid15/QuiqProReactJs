import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navmenu = () => {
  const [show, setShow] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  return (
    <>
      <Navbar bg="" expand="lg" style={{boxShadow: "0px 4px 4px rgba(187, 222, 251, 0.1)",padding:"10px"}}>
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <h5 className="dashboardTitle">dashboard</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center flex-sm-row">
                
            <Nav.Link>
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
                        placeholder="Search "
                        id="exampleInputPassword1"
                      />
                     
                    </div>

            </Nav.Link>
         

              <Nav.Link
                className="notiRelative"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Badge badgeContent={4} color="primary">
                  <Button variant="text">
                    <img
                      src="./img/notification.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </Button>
                </Badge>
              </Nav.Link>

              {show ? (
                <div className="notification-box">
                  <div className="notiHeader ">
                    <div>
                      <h5 className="">
                        Notifications{" "}
                        <span>
                          All &nbsp;{" "}
                          <img
                            src="./img/downchevron.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </span>
                      </h5>{" "}
                    </div>

                    <div>
                      <h5 className="">
                        Notifications{" "}
                        <span>
                          All &nbsp;{" "}
                          <img
                            src="./img/markTick.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </span>
                      </h5>{" "}
                    </div>
                  </div>
                  <div className="notify">
                    <div className="innerNotify">
                      <div className="unread"></div>
                      <div className="imgboxNotify">
                        <img
                          src="./img/Initials.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="textboxNotify">
                        <h5>
                          Lex Murphy Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry{" "}
                        </h5>
                        <div className="btnnotifydiv">
                          <button className="acceptbtn">Accept</button>
                          <button className="Rejectbtn">Reject</button>
                        </div>
                        <div className="TimeNotifydiv">
                          <p>Today at 9:42 AM</p>
                        </div>
                      </div>
                    </div>

                    <div className="innerNotify">
                      <div className="unread"></div>
                      <div className="imgboxNotify">
                        <img
                          src="./img/Initials.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="textboxNotify">
                        <h5 className="fw-bold">
                          Lex Murphy{" "}
                          <span className="comentText">commented on</span> dummy
                          text of the printing and typesetting industry{" "}
                        </h5>

                        <div className="TimeNotifydiv">
                          <p>Yesterday at 11:42 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="innerNotify">
                      <div className="unread"></div>
                      <div className="imgboxNotify">
                        <img
                          src="./img/Initials.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="textboxNotify">
                        <h5 className="fw-bold">
                          Lex Murphy{" "}
                          <span className="comentText">commented on</span> dummy
                          text of the printing and typesetting industry{" "}
                        </h5>

                        <div className="TimeNotifydiv">
                          <p>Yesterday at 11:42 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="innerNotify">
                      <div className="unread"></div>
                      <div className="imgboxNotify">
                        <img
                          src="./img/Initials.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="textboxNotify">
                        <h5 className="fw-bold">
                          Lex Murphy{" "}
                          <span className="comentText">commented on</span> dummy
                          text of the printing and typesetting industry{" "}
                        </h5>

                        <div className="TimeNotifydiv">
                          <p>Yesterday at 11:42 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <Nav className="position-relative ">
                <Button variant="text">
                  <div
                    className="d-flex align-items-center "
                    onClick={() => {
                      setDropdown(!Dropdown);
                    }}
                  >
                    <Avatar alt="Remy Sharp" src="./img/Oval.png" />
                  
                  </div>
                </Button>
                {Dropdown ? (
                  <div className="Dropdown-box">
                    <div className="notify">
                      <div className="innerNotify">
                        <div className="textboxNotify ">
                          <Link
                            className="text-decoration-none"
                            as={Link}
                            to={"/profileview"}
                          >
                            <h5 className="fw-bold">Profile View</h5>
                          </Link>
                        </div>
                      </div>

                      <div className="innerNotify">
                        <div className="textboxNotify">
                          <Link
                            className="text-decoration-none"
                            as={Link}
                            to={"/profileview"}
                          >
                            <h5 className="fw-bold">Setting</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navmenu;
