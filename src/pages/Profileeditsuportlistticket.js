import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Profileeditsuportlistticket = () => {
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
                  <Link className="text-decoration-none" to={"/profileedit"}>
                    <li className="  basicProfileTitle">
                      Basic Profile Setting{" "}
                    </li>
                  </Link>
                  <Link
                    to={"/profileeditbadge"}
                    className="text-decoration-none"
                  >
                    <li className=" basicProfileTitle">
                      Badges & Verifications
                    </li>
                  </Link>
                </ul>

                <h5 className="profileUl">Others</h5>
                <ul className="ulProfileedit">
                  <Link
                    to={"/profileeditsupport"}
                    className=" text-decoration-none"
                  >
                    <li className="basicProfileTitle basicProfileTitleActive">
                      Support
                    </li>
                  </Link>
                  <Link to={"/"} className="text-decoration-none">
                    <li className="basicProfileTitle">Terms & Condition</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="col-12 mt-sm-3 mt-lg-0 col-md-8 col-lg-8 profileformBoxMainDiv p-5">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="basicsProSettingH3 pb-0 text-capitalize">
                  Subject Name
                </h3>
                <button type="button" className="btn btn-lg btn-primary">
                  Action
                </button>
              </div>

              <div className="row  mt-3">
                <div className="col-12 col-md-8 col-lg-8 ">
                  <div className="chatSupportDiv">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      deserunt repellendus id praesentium adipisci est modi
                      fugiat soluta, eos ipsam maiores hic in amet illo, cum
                      quisquam ea ducimus! Saepe.ellendus id praesentium adipisci est modi
                      fugiat soluta, eos ipsam maiores hic in amet illo, cum
                      quisquam ea ducimus! Saepe.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-8 ms-auto mt-4">
                  <div className="chatSupportDiv">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      deserunt repellendus id praesentium adipisci est modi
                      fugiat soluta, eos ipsam maiores hic in amet illo, cum
                      quisquam ea ducimus! Saepe.ellendus id praesentium adipisci est modi
                      fugiat soluta, eos ipsam maiores hic in amet illo, cum
                      quisquam ea ducimus! Saepe.
                    </p>
                  </div>
                  <h5 className="ticketTiming">4-Apr-21       7:00 pm</h5>

                </div>
              </div>
              
             
            </div>
            <div className="ms-auto col-12 col-md-8 col-lg-8 profileformBoxMainDiv p-0 mt-4">
              <div className="profileeditListMaindiv">
                
              <div className="row mt-3">
                <div className="col-12">
                  <div className="mb-3 inputField">
                    <textarea
                      className="form-control inputcus"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "200px" }}
                    ></textarea>

                    <span className="mediaBlackInput">
                      <label for="file">
                        <img
                          src="./img/mediaProfilesupport.png"
                          alt="img"
                          style={{ cursor: "pointer" }}
                        />
                        <input
                          type="file"
                          id="file"
                          style={{ display: "none" }}
                          name="image"
                          accept="image/gif,image/jpeg,image/jpg,image/png"
                          multiple=""
                          data-original-title="upload photos"
                        />
                      </label>
                    </span>
                    <span className="TextAaInput">
                      <img src="./img/TextAa.png" alt="img" />
                    </span>
                    <span className="ChatInput">
                      <img src="./img/ChatTeardropDots.png" alt="img" />
                    </span>
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

export default Profileeditsuportlistticket;
