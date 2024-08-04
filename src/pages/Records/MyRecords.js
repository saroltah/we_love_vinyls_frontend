import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "../../styles/MyPosts.module.css"
import LikedRecords from "../Records/LikedRecords"
import MyAdvertisedRecords from "./MyAdvertisedRecords";

function MyRecords() {

const [activePage, setActivePage] = useState("showMyRecords")
const showMyRecords = () => {setActivePage("showMyRecords")}
const showLiking = () => {setActivePage ("showLiking")}

  return (
    <div className={styles.MyPost}>
    <Nav className = {styles.Container}>
      <button onClick={showMyRecords} className= {styles.Button}>My records</button>
      <button onClick={showLiking} className ={styles.Button}>Liked</button>
    </Nav>
   <div>
{activePage === "showMyRecords" && (<MyAdvertisedRecords/>)}
{activePage === "showLiking" && (<LikedRecords/>)}
</div>
</div>
  )}
export default MyRecords;
