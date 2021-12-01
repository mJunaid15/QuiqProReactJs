import React from "react";
import {
  Navbar,
  Nav,
  Form,
  DropdownButton,
  Dropdown,
  Accordion,
} from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      <section className="sidebarSection">
        <div className="container-fluid mt-3">
          <div className=" text-center my-5">
            <img src="./img/logo.png" alt="logo" className="img-fluid" />{" "}
          </div>
          <Accordion className="">
            <Accordion.Item eventKey="0" className=" border-0" >
              <Accordion.Header className="" >Dashboard </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className=" border-0">
              <Accordion.Header > Admin Management</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
