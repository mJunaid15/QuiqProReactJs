import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Profileedit = () => {
  return (
    <>
      <Menu />
      <Navigate pagename=" Profile Edit" home="Home" />
      <section className="profileSection">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center ">
              <div className="p-3">
                <img src="./img/Oval (1).png" alt="img" />
                <p className="changePicture text-center">Change Picture</p>
              </div>
            </div>
          </div>

          <div className="editForm">
            <div className="row ">
              <div className="col-12">
                <TextField
                  fullWidth
                  label="Display Name"
                  id="fullWidth"
                  size="small"
                />
              </div>
            </div>
            <div className="row  mt-3">
              <div className="col-12 ">
                <p className="gender">Gender</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Female"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <FormControlLabel control={<Checkbox />} label="Male" />
              </div>
            </div>

            <div className="row  mt-3">
              <div className="col-12 ">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{height: "100px"}}
                  ></textarea>
                  <label for="floatingTextarea2">About your self</label>
                </div>
              </div>
            </div>
            <div className="row  mt-3">
              <div className="col-12">
                <TextField fullWidth label="City" id="fullWidth" size="small" />
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
                  <button className="btnProfileEdit me-4">Save</button>
                  <button className="btnProfileEdit mt-sm-3 mt-lg-0">
                    Cancel
                  </button>
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
