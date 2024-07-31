import React , { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../elements/ProfilePic";
import { PostDropdown } from "../../elements/PostDropdown";
import { useCurrentUser } from "../../context/CurrentUserContext"
import { axiosRes } from "../../api/AxiosDefaults"
import EditComment from "./EditComment";

const ShowComment = (props) => {
  const { profile_id, profile_image, member, created, content, id,
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
        <Link to={`/profiles/${profile_id}`}>
          <ProfilePic src={profile_image} />
        </Link>
        <div>
          <span>{member}</span>
          <span>{created}</span>
          <p>{content}</p>
          {editCommentForm ? (
            <EditComment
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setEditCommentForm={setEditCommentForm}
            />
          ) : (
            <p>{content}</p>
          )}
        {is_member && !editCommentForm && (
          <PostDropdown
          SubmitEditForm={() => setEditCommentForm(true)}
          deleteComment={deleteComment}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default ShowComment;