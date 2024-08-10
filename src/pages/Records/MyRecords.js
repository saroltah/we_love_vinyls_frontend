import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import styles from "../../styles/MyPosts.module.css"
import LikedRecords from "../Records/LikedRecords"
import MyAdvertisedRecords from "./MyAdvertisedRecords";

/*
  Opened from menu.
  Collects data of the current user.
  Selects uploaded records
  Selects liked records
*/
function MyRecords() {

const [activePage, setActivePage] = useState("showMyRecords")
const showMyRecords = () => {setActivePage("showMyRecords")}
const showLiking = () => {setActivePage ("showLiking")}

  return (
    <div className={styles.MyPost}>
    <Nav className = {styles.Container}>
      <button onClick={showMyRecords} className= {activePage === "showLiking" ? styles.Button : styles.SecondButton}>My records</button>
      <button onClick={showLiking} className ={activePage === "showMyRecords" ? styles.Button : styles.SecondButton}>Liked</button>
    </Nav>
   <div>
{activePage === "showMyRecords" && (<MyAdvertisedRecords/>)}
{activePage === "showLiking" && (<LikedRecords/>)}
</div>
</div>
  )}
export default MyRecords;
