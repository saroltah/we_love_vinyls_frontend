import React, { useState } from "react";
import AttendedMarkets from "./AttendedMarkets";
import MyOrganizedMarkets from "./MyOrganizedMarkets";
import { Nav } from "react-bootstrap";
import styles from "../../styles/MyPosts.module.css"

function MyMarkets() {

const [activePage, setActivePage] = useState("showMyMarkets")
const showMyMarkets = () => {setActivePage("showMyMarkets")}
const showGoing = () => {setActivePage ("showGoing")}

  return (
    <div className={styles.MyPost}>
    <Nav className = {styles.Container}>
      <button onClick={showMyMarkets} className= {activePage === "showGoing" ? styles.Button : styles.SecondButton}>My markets</button>
      <button onClick={showGoing} className ={activePage === "showMyMarkets" ? styles.Button : styles.SecondButton}>Going</button>
    </Nav>
   <div>
{activePage === "showMyMarkets" && (<MyOrganizedMarkets/>)}
{activePage === "showGoing" && (<AttendedMarkets/>)}
</div>
</div>
  )}
export default MyMarkets;
