import React from "react";
import AddRecordDropdown from "../../elements/AddRecordDropdown";
import AllRecords from "./AllRecords";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Records() {
  return (
    <div>
      <h2> Welome to the vinyl heaven </h2>
      <AllRecords/>
    </div>
  );
}

export default Records;
