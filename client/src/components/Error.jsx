import React from "react";

const Error = ({children}) => {
  return (
    <>
      <div className="alert alert-danger" role="alert">
          {children}
      </div>
    </>
  );
};

export default Error;
