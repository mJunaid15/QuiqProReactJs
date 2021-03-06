import React, { useState } from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OutsideAlerter from "./OutsideAlerter";
import { Link } from "react-router-dom";

const Menu = () => {
  const [show, setShow] = useState(false);
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">
            <img src="./img/logo.png" alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center flex-sm-row">
              <Nav.Link href="#home">
                <Button variant="text">
                  <img
                    src="./img/NewspaperClipping.png"
                    alt="logo"
                    className="img-fluid"
                  />{" "}
                </Button>
              </Nav.Link>
              <Nav.Link href="#home">
                <Button variant="text" className="m-0">
                  <img src="./img/mail.png" alt="logo" className="img-fluid" />{" "}
                </Button>
              </Nav.Link>
              <OutsideAlerter
                onClick={() => {
                  setShow(!show);
                }}
              >
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
              </OutsideAlerter>
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
                    <KeyboardArrowDownIcon style={{ color: "grey" }} />
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

export default Menu;
