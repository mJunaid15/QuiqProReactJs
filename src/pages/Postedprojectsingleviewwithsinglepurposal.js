import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Rating from "@mui/material/Rating";

const Postedprojectsingleviewwithsinglepurposal = () => {
  return (
    <>
      <Menu />
      <section className="dashboardTabs">
        <div className="container">
          <div className="d-lg-flex  flex-lg-row  d-sm-flex flex-sm-column">
            <div className="tabsCustomer ">dashboard</div>

            <div className="tabsCustomer tabcusActive">My Project</div>
            <div className="tabsCustomer">Messages</div>
            <div className="tabsCustomer">Post a job</div>
            <div className="tabsCustomer">Find Master</div>
          </div>
        </div>
      </section>
      <section className="buyCreditSection mt-2">
        <div className="container buycreDiv">
          <p className="navigate">
            Home / My project / Posted Projects /{" "}
            <span className="activeNavigate"> Project Name </span>
          </p>
          <p className="navigatePara">
            Form pages are used to collect or verify information to users, and
            basic forms are common in scenarios where there are fewer data
            items.
          </p>
        </div>
      </section>

      <section className="postedProjectsingle">
        <div className="container">
          <div className="boxComplete">
            <div className="boxleft">
              <h1 className="boxComplete-h1">Project Title</h1>
              <p className="boxComplete-Para">
                Category name: <br /> <span>Posting time here</span>
              </p>
              <p className="boxComplete-para2">
                Project Requirments : <br />
                <span className="postedSpanPara">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing{" "}
                </span>
              </p>
            </div>

            <div className="boxRightPostedProjectAuto ">
              <div>
                <div className="w-100 d-flex justify-content-end my-3">
                  <button className="btnProfileEdit me-4">Revoke </button>
                </div>

                <p className="boxComplete-Para">
                  Price: <span>Fixed</span>
                </p>
                <p className="boxComplete-para2 mb-1">
                  Amount: <span>$ 600</span>
                </p>
                <p className="boxComplete-para2 mb-1">
                  Deadline: <span> 21-10-2021 to 22-10-2021 </span>
                </p>
                <p className="boxComplete-para2">
                  Total proposal: <span> 2 </span>
                </p>
              </div>
            </div>
          </div>

          {/* professional name  */}
          <div className="boxComplete my-3">
            <div className="boxleft">
              <h1 className="boxComplete-h1">Professional Name</h1>
              <p className="Postedporject-Para">
                Price: <span>Fixed</span>
              </p>
              <p className="Postedporject-Para">
                Amount: <span>$ 600</span>
              </p>
              <p className="Postedporject-Para">
                Deadline: <span>Start : 2-11-2021</span> &nbsp;{" "}
                <span>End : 2-11-2021</span>
              </p>
              <p className="boxComplete-para2 ">
                Project Details: <br />
                <span className="postedSpanPara ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing{" "}
                </span>
              </p>
              <p className="Postedporject-Para">
                Attachment: <span>2</span>
              </p>
            </div>
            <div className="boxRightPostedProject ">
              <div>
                <div className="">
                  <img
                    src="./img/CreditsReview.png "
                    alt="img"
                    className="img-fluid bordrImg  "
                  />
                  <h1 className="proH1">Professional Name</h1>
                  <h2 className="proH2">About the client</h2>
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <p className="proPara">
                    Area/ City: <br />
                    <span>city name.</span>
                  </p>
                  <p className="proPara">
                    Job Completed: <br />
                    <span>53.</span>
                  </p>
                  <div className=" d-flex ">
                    <button className="btnProfileEdit me-4">Complete </button>
                    <button className="btnProfileEdit me-4">Chat </button>
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

export default Postedprojectsingleviewwithsinglepurposal;
