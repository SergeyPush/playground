import React from "react";

const style = { border: "2px solid teal" };

// const withBorder = WrappedComponent => props => (
//   <div style={style}>
//     <WrappedComponent {...props} extraprops="other prop" />
//   </div>
// );

const withBorder = WrappedComponent => {
  return function Wrapper(props) {
    return (
      <div style={style}>
        <h1>Picture</h1>
        <WrappedComponent {...props} extraprop="some text" />
      </div>
    );
  };
};

export default withBorder;
