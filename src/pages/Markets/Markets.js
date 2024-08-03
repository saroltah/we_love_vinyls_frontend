import React from "react";
import AllMarkets from "./AllMarkets";
import styles from "../../styles/Lists.module.css"

function Markets() {
  return (
    <div>
       <h1 className={styles.h1}>Vinyl markets</h1>
      <AllMarkets/>
    </div>
  );
}

export default Markets;
