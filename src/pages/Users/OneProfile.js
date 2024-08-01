import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import { PostDropdown } from "../../elements/PostDropdown";
import { useCurrentUser } from "../../context/CurrentUserContext";
import AdvertisedRecords from "../Records/AdvertisedRecords"
import OrganizedMarkets from "../Markets/OrganizedMarkets";

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
  const history = useHistory();
  const editProfile = () => {
    history.push(`/users/${id}/edit`);
  };

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
        <div>
          <h1>{username}</h1>
        <img src={image} alt="user-profile" height={100}/>
        <div>
        {is_member && (
              <PostDropdown
                editPost={editProfile}
              />
            )}
    </div>

      <div>
      <p>About_me: {about_me}</p>
      <p>preferred_music: {preferred_music}</p>
      <p>Liked records: {liked_record_count}</p>
      <p>Attended markets: {attended_market_count}</p>
      <h1>Advertised records:</h1> 
      <p> <AdvertisedRecords profile_id = {id}/> </p>
      <h1>OrganizedMarkets:</h1> 
      <p> <OrganizedMarkets profile_id = {id}/> </p>
        </div> 
       
    </div>
  );}


export default OneProfile