import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import ProfilePic from "../../elements/ProfilePic";
import { axiosRes } from "../../api/AxiosDefaults"

function AddComment(props) {
  const { record, setRecord, setComments, profileImage, profile_id } = props;
  const [commentText, setCommentText] = useState("");

  const changeCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const submitComment = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        commentText,
        record,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setRecord((prevRecord) => ({
        results: [
          {
            ...prevRecord.results[0],
            comment_count: prevRecord.results[0].comment_count + 1,
          },
        ],
      }));
      setCommentText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={submitComment}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <ProfilePic src={profileImage} />
          </Link>
          <Form.Control
            placeholder="comment here..."
            as="textarea"
            value={commentText}
            onChange={changeCommentText}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        disabled={!commentText.trim()}
        type="submit"
      >
        Send comment
      </button>
    </Form>
  );
}

export default AddComment;