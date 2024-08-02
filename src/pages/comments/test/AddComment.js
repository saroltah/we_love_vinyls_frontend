import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import ProfilePic from "../../../elements/ProfilePic";
import { axiosRes } from "../../../api/AxiosDefaults"

function AddComment(props) {
  const { commented_record, setCommented_record, setComments, profile_image, profile_id } = props;
  const [content, setContent] = useState("");

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const submitComment = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        commented_record,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setCommented_record((prevRecord) => ({
        results: [
          {
            ...prevRecord.results[0],
            comment_count: prevRecord.results[0].comment_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={submitComment}>
      <Form.Group>
        <InputGroup>
          <Link to={`/users/${profile_id}`}>
            <ProfilePic src={profile_image} />
          </Link>
          <Form.Control
            placeholder="Write your comment here."
            as="textarea"
            value={content}
            onChange={changeContent}
            rows={3}
          />
        </InputGroup>
      </Form.Group>
      <button
        disabled={!content.trim()}
        type="submit"
      >
        Send comment
      </button>
    </Form>
  );
}

export default AddComment;