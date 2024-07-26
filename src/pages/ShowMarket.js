import React from "react";
import { useCurrentUser } from "../context/CurrentUserContext";
import { Link } from "react-router-dom";
import ProfilePic from "../elements/ProfilePic";
import {OverlayTrigger, Tooltip } from "react-bootstrap";

const ShowMarket = (props) => {
  const {
    id, organizer, country, city, address, date,
            start, end, description,
            members_attending_count, oneMarket, created, profile_slug, profile_image, attendance_id
  } = props;

  const currentUser = useCurrentUser();
  const is_organizer = currentUser?.username === organizer;

  return (
    <div>
          <Link to={`/users/${profile_slug}`}>
            <ProfilePic src={profile_image} height={55} />
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
              overlay={<Tooltip>You can't change attendance for your own market!</Tooltip>}
            >
              <span onClick={() => {}}>😉</span>
            </OverlayTrigger>
          ) : attendance_id ? (
            <span onClick={() => {}}>
              ✨
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              😊
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to attend!</Tooltip>}
            >
              <span onClick={() => {}}>🙌</span>
            </OverlayTrigger>
          )}
          {members_attending_count}
        </div>
        </div>
  );
};

export default ShowMarket;