import React from "react";
import AllRecords from "./AllRecords";
import styles from "../../styles/Lists.module.css"
import { useCurrentUser } from "../../context/CurrentUserContext"
import RecordDropdown from "../../elements/RecordDropdown";



function Records() {
  const currentUser = useCurrentUser()
  return (
    <div>
      <h1 className={styles.h1}> Welome to the vinyl heaven </h1>
      <AllRecords/>
    </div>
  );
}

export default Records;
