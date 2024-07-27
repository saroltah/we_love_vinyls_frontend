import React from "react";
import { useCurrentUser } from "../context/CurrentUserContext";
import { Link } from "react-router-dom";
import ProfilePic from "../elements/ProfilePic";
import {OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import OneRecord from "./OneRecord";
import { axiosRes } from "../api/AxiosDefaults";

const ShowRecord = (props) => {
  const {
    id, advertiser, artist, title, track_list,
    created, condition, image, released, genre,
    members_liking_count, comment_count,
    price, location, contact, profile_id, profile_image, like_id, setRecords
  } = props;

  const currentUser = useCurrentUser();
  const is_advertiser = currentUser?.username === advertiser;

  //innen 

  const submitLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { record: id });
      setRecords((prevRecords) => ({
        ...prevRecords,
        results: prevRecords.results.map((record) => {
          return record.id === id
            ? { ...record, members_liking_count: record.members_liking_count + 1, like_id: data.id }
            : record;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const submitUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setRecords((prevRecords) => ({
        ...prevRecords,
        results: prevRecords.results.map((record) => {
          return record.id === id
            ? { ...record, members_liking_count: record.members_liking_count - 1, like_id: null }
            : record;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  //idáig

  return (
  <div>
    <div>
      <Link to={`/users/${profile_id}`}>
      <ProfilePic
          src={profile_image}
          height={50}
        />
        {advertiser}
        </Link>
        <div>
        <span>{created}</span>
        {is_advertiser && OneRecord && "..."}
      </div>
    </div>

    <Link to={`/records/${id}`}>
    <img src={image} alt={title} height={100}/>
  </Link>
      <div>
      <h3>{artist}: {title} </h3>
      <p>Artist: {artist}</p>
      <p>Title: {title}</p>
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
        overlay={<Tooltip>You can not like your own posts!</Tooltip>}
      >
          <i>❤️</i>
        </OverlayTrigger>
      ) : like_id ? (
        <span onClick={submitUnlike}>
          <i>❤️</i>
        </span>
      ) : currentUser ? (
        <span onClick={submitLike}>
          <i>🤍</i>
        </span>
      ) : (
        <OverlayTrigger
        placement="top"
        overlay={<Tooltip>You have to log in to like posts!</Tooltip>}
      >
          <i>🤍</i>
        </OverlayTrigger>
      )}
      {members_liking_count}
      <Link to={`/records/${id}`}>
        <i>💬</i>
      </Link>
      {comment_count}
        </div>
        </div>
        </div>
  );
};

export default ShowRecord;