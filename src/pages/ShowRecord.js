import React from "react";
import { useCurrentUser } from "../context/CurrentUserContext";
import { Link } from "react-router-dom";
import ProfilePic from "../elements/ProfilePic";
import {OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import OneRecord from "./OneRecord";

const ShowRecord = (props) => {
  const {
    id, advertiser, artist, title, track_list,
    created, condition, image, released, genre,
    members_liking_count, comment_count,
    price, location, contact, profile_slug, profile_image, like_id  
  } = props;

  const currentUser = useCurrentUser();
  const is_advertiser = currentUser?.username === advertiser;

  return (
  <div>
          <Link to={`/users/${profile_slug}`}>
            <ProfilePic src={profile_image} height={55} />
            {advertiser}
          </Link>
          <div>
            <span>{created}</span>
            {is_advertiser && OneRecord && "..."}
          </div>

      <Link to={`/records/${id}`}>
      <Card.Img src={image} alt={title} />
      </Link>
      
      <h3>{artist}: {title} </h3>
      <p>Artist: {artist}</p>
      <p>Title: {title}</p>
      <p>Year: {created}</p>
      <p>Track list: {track_list}</p>
      <p>Year: {released}</p>
      <p>Genre: {genre}</p>
      <p>Condition: {condition}</p>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
      <p>Contact: {contact}</p>

        <div>
          {is_advertiser ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can not like your own post!</Tooltip>}
            >
              <span>🙌</span>
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              😊
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              🌿
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You need to log in to like posts!</Tooltip>}
            >
              <span>👈</span>
            </OverlayTrigger>
          )}
          {members_liking_count}
          <Link to={`/records/${id}`}>
            <span>⬅️➡️</span>
          </Link>
          {comment_count}
        </div>
        </div>
  );
};

export default ShowRecord;