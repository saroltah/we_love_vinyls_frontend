import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loading() {
  return (
    <ThreeCircles
      height="70"
      width="70"
      color=" #FFFFFF"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loading;
