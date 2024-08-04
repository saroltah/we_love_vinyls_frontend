import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import { useCurrentUser } from "../../context/CurrentUserContext";
import AdvertisedRecords from "../Records/AdvertisedRecords"
import OrganizedMarkets from "../Markets/OrganizedMarkets";
import styles from "../../styles/Profile.module.css"
import { EditProfileDropdown } from "../../elements/EditProfileDropdown";




function OneProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profile }] = await Promise.all([
          axiosReq.get(`/users/${id}`),
        ]);
        setProfile(profile);
        console.log(profile);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  const currentUser = useCurrentUser();
  const is_member = currentUser?.username === profile?.member;
 

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
        <img src={image} alt="user-profile" height={100} className={styles.Image}/>
       
        <div className={styles.Details}>
      {about_me ? (
      <p><span className={styles.DetailsTitle}>About me:</span> {about_me}</p>): null}
      {preferred_music ? (
      <p><span className={styles.DetailsTitle}>Music I prefer:</span> {preferred_music}</p>): null}
      <p><span className={styles.DetailsTitle}>Records I like:</span> {liked_record_count}</p>
      <p><span className={styles.DetailsTitle}>Markets I attend:</span> {attended_market_count}</p>
      <h3 className={styles.h3}>Advertised records:</h3> 
      <p> <AdvertisedRecords profile_id = {id}/> </p>
      <h3 className={styles.h3}>Organized markets:</h3> 
      <p> <OrganizedMarkets profile_id = {id}/> </p>
        </div> 
       
    </div>
  );}


export default OneProfile