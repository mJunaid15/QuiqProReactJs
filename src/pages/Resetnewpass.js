import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const Resetnewpass = () => {

    
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [valuespass, setValuespass] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword1 = () => {
    setValuespass({
      ...valuespass,
      showPassword: !valuespass.showPassword,
    });
  };
  const handleChange2 = (prop) => (event) => {
    setValuespass({ ...valuespass, [prop]: event.target.value });
  };

 

    const handleChange1 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
   
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
     
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
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
                <h1 className="ForgotH1">Reset New Password</h1>
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
                 <FormControl
                      sx={{ width: "100%" }}
                      style={{ marginTop: "20px" }}
                      variant="outlined"
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange1("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    <FormControl
                      sx={{ width: "100%" }}
                      style={{ marginTop: "20px" }}
                      variant="outlined"
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={valuespass.showPassword ? "text" : "password"}
                        value={valuespass.password}
                        onChange={handleChange2("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword1}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {valuespass.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label=" Password"
                      />
                    </FormControl>

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

export default Resetnewpass;
