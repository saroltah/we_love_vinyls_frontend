import React from "react";
import { useCurrentUser } from "../context/CurrentUserContext";
import { Link } from "react-router-dom";
import ProfilePic from "../elements/ProfilePic";
import {OverlayTrigger, Tooltip } from "react-bootstrap";
import { axiosRes } from "../api/AxiosDefaults";

const ShowMarket = (props) => {
  const {
    id, organizer, country, city, address, date,
            start, end, description,
            members_attending_count, oneMarket, created, profile_id, profile_image, attendance_id, setMarkets, attended_market
  } = props;

  const currentUser = useCurrentUser();
  const is_organizer = currentUser?.username === organizer;

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
      console.log(err);
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
      console.log(err);
    }
  };

  return (
    <div>
           <Link to={`/users/${profile_id}`}>
      <ProfilePic
          src={profile_image}
          height={50}
        />
        {organizer}
        </Link>
          <div>
            <span>{created}</span>
            {is_organizer && oneMarket && "..."}
          </div>

      <Link to={`/markets/${id}`}>
        <p>Vinyl market in {city}, {country}</p>
      </Link>

<p>{description}</p>
<p>Where? <span> {address}, {city}, {country}</span></p>
<p>When? <span> {date}, {start} - {end}</span></p>

<div>
      {is_organizer ? (
        <OverlayTrigger
        placement="top"
        overlay={<Tooltip>You can not change attendance at your own market!</Tooltip>}
      >
          <i>❤️</i>
        </OverlayTrigger>
      ) : attendance_id ? (
        <span onClick={submitNotAttending} style={{ cursor: 'pointer' }}>
          <i>❤️</i>
        </span>
      ) : currentUser ? (
        <span onClick={submitAttendance} style={{ cursor: 'pointer' }}>
          <i>🤍</i>
        </span>
      ) : (
        <OverlayTrigger
        placement="top"
        overlay={<Tooltip>You have to log in to show attendance!</Tooltip>}
      >
          <i>🤍</i>
        </OverlayTrigger>
      )}
      {members_attending_count}
        </div>
        </div>
  );
};

export default ShowMarket;