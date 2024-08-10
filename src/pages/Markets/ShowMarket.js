import React, { useState } from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { Link, useHistory } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { axiosRes } from "../../api/AxiosDefaults";
import { PostDropdown } from "../../elements/PostDropdown";
import styles from "../../styles/OnePost.module.css";
import emoji from "../../styles/Emoji.module.css";
import Notification from "../../elements/Notification";

/*
  Display of a market
  Attendance logic and button
  Delete market logic
*/
const ShowMarket = (props) => {
  const {
    id, organizer, country, city, address, date,
            start, end, description,
            members_attending_count, created, organizer_id, organizer_image, attendance_id, setMarkets, showLink=true
  } = props;

  const currentUser = useCurrentUser();
  const is_organizer = currentUser?.username === organizer;
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMesssage] = useState('')

  const history = useHistory();

  const MarketTitle = (<div className={ `showLink ? ${styles.Title} : ${styles.SecondTitle}`}>Vinyl market in {city}, {country}</div>);

  const editPost = () => {
    history.push(`/markets/${id}/edit`);
  };

  const deletePost = async () => {
    try {
      await axiosRes.delete(`/markets/${id}/`);
      setTimeout(() => {
      history.push(`/markets/`);
    }, 2000);
    setShowNotification(true)
    setNotificationMesssage("Market deleted successfully!")
    } catch (err) {
      setShowNotification(true)
      setNotificationMesssage("ERROR! Try again!")
      //console.log(err);
    }
  };

  const submitAttendance = async () => {
    try {
      const { data } = await axiosRes.post("/attendance/", { attended_market: id });
      setMarkets((prevMarkets) => ({
        ...prevMarkets,
        results: prevMarkets.results.map((market) => {
          return market.id === id
            ? { ...market, members_attending_count: market.members_attending_count + 1, attendance_id: data.id }
            : market;
        }),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

  const submitNotAttending = async () => {
    try {
      await axiosRes.delete(`/attendance/${attendance_id}/`);
      setMarkets((prevMarkets) => ({
        ...prevMarkets,
        results: prevMarkets.results.map((market) => {
          return market.id === id
            ? { ...market, members_attending_count: market.members_attending_count - 1, attendance_id: null }
            : market;
        }),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

  return (
    <div>
        {showNotification && (
            <Notification
              message={notificationMessage}
              onClose={() => setShowNotification(false)}
            />
          )}
      <div className={styles.OnePost}>
      <div className={styles.Container}>
           <Link to={`/users/${organizer_id}`} className={styles.LeftSide}>
      <ProfilePic
          src={organizer_image}
          height={50}
        />
        {organizer}
        </Link>
        <span className={styles.RightSide}>
            <span>{created}</span>
           <span>{is_organizer && ShowMarket && (
              <PostDropdown
                editPost={editPost}
                deletePost={deletePost}
              />
            )}
          </span>
          </span>
</div>
{showLink ? ( <Link to={`/markets/${id}`}>
  {MarketTitle}</Link> ) : ( MarketTitle )}
<div className={styles.Details}>
<p>{description}</p>
<p><span className={styles.DetailsTitle}>Where?</span> <span> {address}, {city}, {country}</span></p>
<p><span className={styles.DetailsTitle}>When?</span> <span> {date}, {start} - {end}</span></p>

<div>
      {is_organizer ? (
        <OverlayTrigger
        placement="top"
        overlay={<Tooltip>You can not change attendance at your own market!</Tooltip>}
      >
         <i className={`fa-solid fa-child-reaching ${emoji.Emoji}`}></i>
        </OverlayTrigger>
      ) : attendance_id ? (
        <span onClick={submitNotAttending} style={{ cursor: 'pointer' }}>
          <i className={`fa-solid fa-child-reaching ${emoji.Emoji}`}></i>
        </span>
      ) : currentUser ? (
        <span onClick={submitAttendance} style={{ cursor: 'pointer' }}>
          <i className={`fa-solid fa-child ${emoji.Emoji}`}></i>
        </span>
      ) : (
        <OverlayTrigger
        placement="top"
        overlay={<Tooltip>You have to log in to show attendance!</Tooltip>}
      >
          <i className={`fa-solid fa-child ${emoji.Emoji}`}></i>
        </OverlayTrigger>
      )}
      {members_attending_count}
        </div>
        </div>
        </div>
        </div>
  );
};

export default ShowMarket;