import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";
import styles from "../../styles/Comment.module.css"
import { useCurrentUser } from "../../context/CurrentUserContext";
import { PostDropdown } from "../../elements/PostDropdown";
import EditComment from "./EditComment";
import { axiosRes } from "../../api/AxiosDefaults"

const ShowComment = (props) => {
  const { id, member_id, member_image, member, created, content, setComments, setRecord } = props;
  const currentUser = useCurrentUser();
  const is_member = currentUser?.username === member;  
  const [showEditForm, setShowEditForm] = useState(false);

  const deleteComment = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setRecord((prevRecord) => ({
        results: [
          {
            ...prevRecord.results[0],
          comment_count: prevRecord.results[0].comment_count + 1,
          },
        ],
      }));
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

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
              editPost={() => setShowEditForm(true)}
              deletePost={deleteComment}
              />
            )}
          </span>
          </span>
</div>
      <div>{showEditForm ? (
            <EditComment
              id={id}
              member_id={member_id}
              content={content}
              member_image={member_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}</div>
    </div>
  );
};

export default ShowComment;