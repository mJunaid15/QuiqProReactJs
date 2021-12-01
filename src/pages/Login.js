import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Login() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

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
          <div className="formDiv">
            <div className="text-center">
              <img src="./img/logo.png" alt="logo" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Login" {...a11yProps(0)} />
                  <Tab label="Sign Up" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div>
                  <h1 className="loginH1">Login your Account</h1>
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
                      label="Email"
                      id="fullWidth"
                      size="small"
                    />

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

                    <FormGroup>
                      <div className="row ">
                        <div className="col-6">
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remember me"
                          />
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                          <p className="py-2 forgotPara">Forgot Passward?</p>
                        </div>
                      </div>

                      <Button variant="contained">Login</Button>
                    </FormGroup>
                    <div className="d-flex justify-content-between px-1 py-3">
                      <p>
                        Quick Sign-in: <img src="./img/google.png" alt="g" />&nbsp;
                        <img src="./img/facebook.png" alt="g" />
                      </p>
                      <p className="forgotPara" onClick={()=>handleChange("event",1)}>
                        Sign Up
                        </p>
                    </div>
                  </Box>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <h1 className="loginH1">Signup your Account</h1>
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
                      label="Name"
                      id="fullWidth"
                      size="small"
                    />

                    <TextField
                      fullWidth
                      label="Email"
                      id="fullWidth"
                      size="small"
                      style={{ marginTop: "20px" }}
                    />

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
                        label=" Password"
                      />
                    </FormControl>
                    <FormGroup>
                      <Button variant="contained"  style={{ marginTop: "20px" }}>Sign Up</Button>
                    </FormGroup>
                    <div className="d-flex justify-content-between px-1 py-3">
                      <p>
                        Quick Sign-up: <img src="./img/google.png" alt="g"  /> &nbsp;

                        <img src="./img/facebook.png" alt="g" />
                      </p>
                      <p className="forgotPara" onClick={()=>handleChange("event",0)}> Existing account?</p>
                    </div>
                  </Box>
                </div>
              </TabPanel>
            </Box>
          </div>
        </div>
      </section>
      <div className="container">
        <h1 className="copyright">Copyright ©2020 Produced by QuiqPro</h1>
      </div>
    </>
  );
}
