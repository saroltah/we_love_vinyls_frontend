import React from "react";
import AllRecords from "./AllRecords";
import General from "../../styles/General.module.css"

function Records() {
  return (
    <div>
      <h1 className={General.h1}> Welome to the vinyl heaven </h1>
      <AllRecords/>
    </div>
  );
}

export default Records;
