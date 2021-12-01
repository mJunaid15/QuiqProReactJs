import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Dropdown, Badge } from "react-bootstrap";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Findprofessional = () => {
  return (
    <>
      <Menu />

      <section className="dashboardTabs">
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer ">
              <img src="./img/DashboardBlack.png" alt="img" /> &nbsp; dashboard
            </div>

            <div className="tabsCustomer ">
              {" "}
              <img src="./img/MyProjects.png" alt="img" /> &nbsp; My Project
            </div>
            <div className="tabsCustomer">
              <img src="./img/Vectormsg.png" alt="img" /> &nbsp; Messages
            </div>
            <div className="tabsCustomer tabcusActive">
              <img src="./img/FindProfessionalsRed.png" alt="img" /> &nbsp; Find
              Professional
            </div>
          </div>
        </div>
      </section>

      <section className="searcSection mt-3">
        <div className="container d-lg-flex flex-lg-row justify-content-lg-between d-sm-flex flex-sm-column ">
          <div className="searchDiv">
            <div className="mb-3 inputField">
              <span className="iconsInput">
                <img
                  src="./img/searchIcon.png"
                  alt="img"
                  className="img-fluid"
                />
              </span>
              <input
                type="email"
                className="form-control inputcus"
                placeholder="Your E-mail"
                id="exampleInputPassword1"
              />
              <span className="ZipInput">
                <input
                  type="text"
                  placeholder="Zip code"
                  className="zipcodeFeild"
                />
              </span>
            </div>
          </div>
          <div className="dropdownDiv ">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                New first
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div>
              <button className="btnaddProject">
                {" "}
                <span>
                  {" "}
                  <img
                    src="./img/plus.png"
                    alt="img"
                    className="img-fluid"
                  />{" "}
                </span>{" "}
                Add Project
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="lisOfPro">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8">
              <div className="">
                <h1 className="listOfh1 border-bottom ps-2">
                  List of Professional
                </h1>
              </div>

              <div>
                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center my-4">
                  <p className="featureProPara">Features Professionals.</p>
                  <Button variant="outlined">
                    Load More &nbsp;{" "}
                    <img src="./img/chevronright.png" alt="img" />
                  </Button>
                </div>
                <div className="lineOpaticty my-3"></div>
                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boxComplete my-3 ">
                  <div className="boxleft">
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                        <img
                          src="./img/cover.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="titleCover ps-1">
                          {" "}
                          Ayesha Ali <Badge bg="primary">Featured</Badge>{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="subCatDiv">
                      <p className="categoryPara">
                        Category , <span> Sub category</span>
                      </p>
                      <p className="categoryPara">
                        Key words : <span>Key words here</span>
                      </p>
                      <p className="aboutPara">
                        <span className="aboutH5">About me :</span>&nbsp; About
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>

                  <div className="boxRightPostedProject justify-content-center">
                    <div>
                      <p className="categoryPara">
                        Rating : <span> 4.5</span>
                      </p>
                      <p className="categoryPara">
                        Offers Service : <span> Remote, On Office</span>
                      </p>
                      <p className="categoryPara">
                        City Name: <span> Example city name</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center my-4">
                  <p className="featureProPara">Regular Professionals.</p>
                  <Button variant="outlined">
                    Load More &nbsp;{" "}
                    <img src="./img/chevronright.png" alt="img" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mt-5">
              <div className="">
                <div className="filterDiv">
                  <h1 className="filterH1">Filter </h1>
                  <div className="searchDivFilter">
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
                      <span className="ZipInput">
                        <input
                          type="text"
                          placeholder="Zip code"
                          className="zipcodeFeildFilter"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="skillDiv">
                    <h1 className="skillH1">Skill</h1>
                    <div className="d-flex justify-content-between align-items-center">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="1st skill"
                        />
                      </FormGroup>
                      <div>
                        <h5 className="skillNum">11</h5>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="2nd skill"
                        />
                      </FormGroup>
                      <div>
                        <h5 className="skillNum">23</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="3rd skill"
                        />
                      </FormGroup>
                      <div>
                        <h5 className="skillNum">12</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="4th skill"
                        />
                      </FormGroup>
                      <div>
                        <h5 className="skillNum">04</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="5th skill"
                        />
                      </FormGroup>
                      <div>
                        <h5 className="skillNum">22</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="6th skill"
                        />
                      </FormGroup>
                      <div>
                        <h5 className="skillNum">103</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Findprofessional;
