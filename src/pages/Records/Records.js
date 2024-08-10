import React from "react";
import AllRecords from "./AllRecords";
import styles from "../../styles/Lists.module.css"


/*
  Opened from menu.
  Selects All records
*/
function Records() {
  return (
    <div>
      <div className={styles.container}>
      <h1 className={styles.h1}> Welome to the vinyl heaven </h1></div>
      <AllRecords/>
    </div>
  );
}

export default Records;
