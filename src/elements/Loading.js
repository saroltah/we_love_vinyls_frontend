import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loading() {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loading;
