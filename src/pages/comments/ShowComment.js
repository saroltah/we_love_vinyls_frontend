import React , { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";
import { PostDropdown } from "../../elements/PostDropdown";
import { useCurrentUser } from "../../context/CurrentUserContext"
import { axiosRes } from "../../api/AxiosDefaults"
import EditComment from "./EditComment";

const ShowComment = (props) => {
  const { member_id, member_image, member, created, content, id,
    setRecord,
    setComments, } = props;

    const [editCommentForm, setEditCommentForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_member = currentUser?.username === member;
  
    const deleteComment = async () => {
      try {
        await axiosRes.delete(`/comments/${id}/`);
        setRecord((prevRecord) => ({
          results: [
            {
              ...prevRecord.results[0],
              comment_count: prevRecord.results[0].comment_count - 1,
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
    <div>
      <hr />
      <div>
        <Link to={`/users/${member_id}`}>
          <ProfilePic src={member_image} />
        </Link>
        <div>
          <span>{member}</span>
          <span>{created}</span>
          <p>{content}</p>
          {editCommentForm ? (
            <EditComment
              id={id}
              profile_id={member_id}
              content={content}
              profileImage={member_image}
              setComments={setComments}
              setEditCommentForm={setEditCommentForm}
            />
          ) : (
            <p>{content}</p>
          )}
        {is_member && !editCommentForm && (
          <PostDropdown
          editPost={() => setEditCommentForm(true)}
          deletePost={deleteComment}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default ShowComment;