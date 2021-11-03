import React from "react";

const Navigate = (props) => {
  return (
    <>
      <section className="buyCreditSection mt-2">
        <div className="container buycreDiv">
          <p className="navigate">
            {props.home} / {props.pagename}
          </p>
          <h1 className="navigateH1">{props.title} </h1>
          <p className="navigatePara">{props.para}</p>
        </div>
      </section>
    </>
  );
};

export default Navigate;
