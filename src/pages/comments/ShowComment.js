import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";

const ShowComment = (props) => {
  const { member_id, member_image, member, created, content } = props;


  return (
    <div>
      <Media>
        <Link to={`/users/${member_id}`}>
          <ProfilePic src={member_image} />
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