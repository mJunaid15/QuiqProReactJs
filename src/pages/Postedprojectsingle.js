import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Postedprojectsingle = () => {
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
          <p className="navigate">Home / My project / Posted Project / </p>
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
                Project Details: <br />
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

            <div className="boxRightPostedProject ">
              <div>
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
          <div className="boxComplete mt-3">
            <div className="boxleftPostedproject">
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
              <p className="boxComplete-para2 postedprojectsingleViewpara">
                Project Details: <br />
                <span className="postedSpanPara postedprojectsingleViewpara">
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
              <div className=" d-flex justify-content-end">
                <button className="btnProfileEdit me-4">View </button>
              </div>
            </div>
          </div>

          <div className="boxComplete my-3">
            <div className="boxleftPostedproject">
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
              <p className="boxComplete-para2 postedprojectsingleViewpara">
                Project Details: <br />
                <span className="postedSpanPara postedprojectsingleViewpara">
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
              <div className=" d-flex justify-content-end">
                <button className="btnProfileEdit me-4">View </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Postedprojectsingle;
