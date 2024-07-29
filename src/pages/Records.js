import React from "react";
import AddRecord from "./AddRecord";
import AllRecords from "./AllRecords";
import LikedRecords from "./LikedRecords";

function Records() {
  return (
    <div>
      <AllRecords/>
      <AddRecord/>
    </div>
  );
}

export default Records;
