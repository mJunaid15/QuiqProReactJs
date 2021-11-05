import React from "react";
import Menu from "../components/Menu";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


import Footer from "../components/Footer";

const Postajob = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Menu />
      <section className="dashboardTabs">
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer ">dashboard</div>

            <div className="tabsCustomer ">My Project</div>
            <div className="tabsCustomer">Messages</div>
            <div className="tabsCustomer tabcusActive">Post a job</div>
            <div className="tabsCustomer">Find Master</div>
          </div>
        </div>
      </section>

      <section className="postAJob my-3">
        <div className="container">
          <div className="posajobFormdive">
            <h1 className="postajobH1">Post A Job</h1>
            <p className="postjobPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="">
              <div className="row ">
                <div className="col-12">
                  <TextField
                    fullWidth
                    label="Title"
                    id="fullWidth"
                    size="small"
                  />
                </div>
              </div>

              <div className="row  mt-3">
                <div className="col-12 ">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-transparent"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label for="floatingTextarea2">Describe your job</label>
                  </div>
                </div>
              </div>
              <div className="row  mt-3">
                <div className="col-12 ">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select the category of work{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row  mt-3">
                <div className="col-12 ">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select the sub category of work
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row  mt-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <TextField
                    fullWidth
                    label=" Budget"
                    id="fullWidth"
                    size="small"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <TextField
                    fullWidth
                    label="Requirment"
                    id="fullWidth"
                    size="small"
                  />
                </div>
              </div>
              <div className="row  mt-3 ">
                <div className="col-12">
                  <h1 className="choosefileH1">Attached supported document</h1>

                 
                  <input type="file" />
                 
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 ">
                  <div className="d-flex d-sm-column">
                    <button className="btnProfileEdit me-4">Post A Job</button>
                    <button className="btnProfileEdit mt-sm-3 mt-lg-0">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Postajob;
