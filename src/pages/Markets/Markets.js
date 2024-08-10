import React from "react";
import AllMarkets from "./AllMarkets";
import styles from "../../styles/Lists.module.css"

/*
The page opened from the menu
Selects all markets
*/
function Markets() {
  return (
    <div>
       <h1 className={styles.h1}>Vinyl markets</h1>
      <AllMarkets/>
    </div>
  );
}

export default Markets;
