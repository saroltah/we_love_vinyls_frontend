import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import AdvertisedRecords from "../Records/AdvertisedRecords"
import OrganizedMarkets from "../Markets/OrganizedMarkets";
import styles from "../../styles/Profile.module.css"
import { EditProfileDropdown } from "../../elements/EditProfileDropdown";
import myPostStyles from "../../styles/MyPosts.module.css"
import Nav from "react-bootstrap/Nav";

// Displays Profile 
function OneProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

const [activePage, setActivePage] = useState("showMyRecords")
const showMyRecords = () => {setActivePage("showMyRecords")}
const showMyMarkets = () => {setActivePage ("showMyMarkets")}


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profile }] = await Promise.all([
          axiosReq.get(`/users/${id}`),
        ]);
        setProfile(profile);
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [id]);


  if (!profile) {
    return <div>Loading</div>
  }
  const {
    username,
            preferred_music, about_me,
            image, liked_record_count,
            attended_market_count, 
  } = profile;


  return (
        <div className={styles.Profile}>
          <div className={styles.Container}>
          <h1 className={styles.Middle}>{username}</h1>
          <span className={styles.RightSide}>
          <div>
        {profile?.is_member && (
              <EditProfileDropdown id={profile?.id}
              />
            )}
    </div>
    </span>
</div>
        <img src={image} alt="user-profile" height={200} className={styles.Image}/>
       
        <div className={styles.Details}>
      {about_me ? (
      <p><span className={styles.DetailsTitle}>About me:</span> {about_me}</p>): null}
      {preferred_music ? (
      <p><span className={styles.DetailsTitle}>Music I prefer:</span> {preferred_music}</p>): null}
      <p><span className={styles.DetailsTitle}>Records I like:</span> {liked_record_count}</p>
      <p><span className={styles.DetailsTitle}>Markets I go to:</span> {attended_market_count}</p>

        </div> 

        <div className={myPostStyles.MyPost}>
    <Nav className = {myPostStyles.Container}>
      <button onClick={showMyRecords} className= {activePage === "showMyMarkets" ? myPostStyles.Button : myPostStyles.SecondButton}>My records</button>
      <button onClick={showMyMarkets} className ={activePage === "showMyRecords" ? myPostStyles.Button : myPostStyles.SecondButton}>My markets</button>
    </Nav>
   <div>
{activePage === "showMyRecords" && (<AdvertisedRecords profile_id={id} />)}
{activePage === "showMyMarkets" && (<OrganizedMarkets profile_id={id}/>)}
</div>
</div>
    </div>
  );}


export default OneProfile