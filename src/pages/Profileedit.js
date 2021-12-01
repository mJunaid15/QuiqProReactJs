import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Profileedit = () => {

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Menu />
      <Navigate pagename=" Profile Edit" home="Home" />
      <section className="profileSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="settingDv">
                <h5 className="settingh5">Setting </h5>
                <h5 className="profileUl">Profile</h5>
                <ul className="ulProfileedit">
                <Link className="text-decoration-none"  to={"/profileedit"}>
                    <li
                      className=" basicProfileTitleActive  basicProfileTitle"
                      
                     
                    >
                      Basic Profile Setting{" "}
                    </li>
                  </Link>
                  <Link to={"/profileeditbadge"} className="text-decoration-none">
                    <li
                      className=" basicProfileTitle"
                     
                    >
                      Badges & Verifications
                    </li>
                  </Link>
                </ul>

                <h5 className="profileUl">Others</h5>
                <ul className="ulProfileedit">
                  <Link to={"/"} className="text-decoration-none">
                    <li className="basicProfileTitle">Support</li>
                  </Link>
                  <Link to={"/"} className="text-decoration-none">
                    <li className="basicProfileTitle">Terms & Condition</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-8 profileformBoxMainDiv p-5">
              <h3 className="basicsProSettingH3 pb-3">Basics Profile setting</h3>
              <div className="row ">
                <div className="col-12 d-flex justify-content-start ">
                  <div className="pb-3">
                    <img src="./img/Oval (1).png" alt="img" />
                    <p className="changePicture">Change Picture</p>
                  </div>
                </div>
              </div>

              <div className="editForm">
                <div className="row ">
                  <div className="col-12 col-md-6 col-lg-6">
                    <TextField
                      fullWidth
                      label="First Name"
                      id="fullWidth"
                      size="small"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <TextField
                      fullWidth
                      label="Last Name"
                      id="fullWidth"
                      size="small"
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                  <Box sx={{ minWidth: 100 }} className="mt-3 "> 
                    <FormControl fullWidth >
                      <InputLabel id="demo-simple-select-label" >Select your gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        size="small"
                        value={age}
                        label="Select your gender"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                      </Select>
                    </FormControl>
                    </Box>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 col-md-6 col-lg-6">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="I don't want to disclose"
                    />
                  </div>
                </div>

                <div className="row  mt-3">
                  <div className="col-12 ">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="floatingTextarea2">About your self</label>
                    </div>
                  </div>
                </div>
                <div className="row  mt-3">
                  <div className="col-12">
                    <TextField
                      fullWidth
                      label="City"
                      id="fullWidth"
                      size="small"
                    />
                  </div>
                </div>
                <div className="row  mt-3 ">
                  <div className="col-12">
                    <TextField
                      fullWidth
                      label="Zip code"
                      id="fullWidth"
                      size="small"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 ">
                    <div className="d-flex d-sm-column">
                      <button className="btnProfileEdit mt-sm-3  me-4">Save</button>
                      <button className="btnProfileEdit mt-sm-3 mt-lg-0">
                        Cancel
                      </button>
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

export default Profileedit;
