import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loading() {
  return (
    (<ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#FFFFFF"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />)
  );
}

export default Loading;
