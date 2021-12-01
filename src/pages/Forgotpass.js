import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Forgotpass = () => {
  return (
    <>
      <section className="loginScreen">
        <div className="container">
          <div className="pt-4 backtextDiv">
            {" "}
            <img src="./img/arrow-left.png" alt="backarrow" /> Back
          </div>
        </div>

        <div className="container loginMainDiv d-flex align-align-items-center">
          <div className="formDiv">
            <Box sx={{ width: "100%" }}>
              <div>
                <h1 className="ForgotH1">Forgot Password</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Box
                  component="form"
                  sx={{
                    m: 2,

                    maxWidth: "100%",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    fullWidth
                    label="Enter your email"
                    id="fullWidth"
                    size="small"
                  />

                  <div className="d-flex justify-content-center  ">
                    <Button
                      variant="contained"
                      style={{ marginTop: "20px", width: "90%" }}
                    >
                      Submit
                    </Button>
                  </div>
                </Box>
              </div>
            </Box>
          </div>
        </div>
      </section>
      <div className="container">
        <h1 className="copyright">Copyright ©2020 Produced by QuiqPro</h1>
      </div>
    </>
  );
};

export default Forgotpass;
