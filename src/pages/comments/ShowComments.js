import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";
import styles from "../../styles/Comment.module.css"
import { useCurrentUser } from "../../context/CurrentUserContext";
import { PostDropdown } from "../../elements/PostDropdown";

const ShowComment = (props) => {
  const { member_id, member_image, member, created, content } = props;
  const currentUser = useCurrentUser();
  const is_member = currentUser?.username === member;  

  return (
    <div className={styles.Comment}>
    <div className={styles.Container}>
           <Link to={`/users/${member}`} className={styles.LeftSide}>
      <ProfilePic
          src={member_image}
          height={50}
          text={member}
        />
        </Link>
        <span className={styles.RightSide}>
            <span>{created}</span>
           <span>{is_member && ShowComment && (
              <PostDropdown
                
              />
            )}
          </span>
          </span>
</div>
      <div>{content}</div>
    </div>
  );
};

export default ShowComment;