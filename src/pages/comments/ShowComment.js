import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";

const ShowComment = (props) => {
  const { profile_id, profile_image, member, created, content } = props;

  return (
    <div>
      <Media>
        <Link to={`/users/${profile_id}`}>
          <ProfilePic src={profile_image} />
        </Link>
        <Media.Body>
          <span>{member}</span>
          <span>{created}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default ShowComment;