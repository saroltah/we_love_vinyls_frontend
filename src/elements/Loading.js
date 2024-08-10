import React from 'react';
import { ThreeCircles } from "react-loader-spinner";

// Spinner is shown for loading data
function Loading() {
  return (
    (<ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#000000"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />)
  );
}

export default Loading;
