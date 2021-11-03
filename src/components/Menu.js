import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">
          
            <img src="./img/logo.png" alt="logo" className="img-fluid" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center flex-sm-row">
                

              <Nav.Link href="#home">
                <img src="./img/mail.png" alt="logo" className="img-fluid" />{" "}
              </Nav.Link>
              <Nav.Link href="#link">
              <Badge badgeContent={4} color="primary">

                <img
                  src="./img/notification.png"
                  alt="logo"
                  className="img-fluid"
                />
                </Badge>
              </Nav.Link>
              <Nav.Link href="#home">
                  <div className="d-flex align-items-center">
                <Avatar alt="Remy Sharp" src="./img/Oval.png" />
                <KeyboardArrowDownIcon style={{color:"grey"}}/>


                  </div>
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Menu;
