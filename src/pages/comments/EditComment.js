import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/AxiosDefaults"
import styles from "../../styles/Comment.module.css"

function EditComment(props) {
  const { id, content, setShowEditForm, setComments } = props;

  const [editContent, setEditContent] = useState(content);

  const changeComment = (event) => {
    setEditContent(event.target.value);
  };

  const submitEditedComment = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: editContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: editContent.trim(),
                created: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={submitEditedComment}>
      <Form.Group className="pr-1">
        <Form.Control
          as="textarea"
          value={editContent}
          onChange={changeComment}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          onClick={() => setShowEditForm(false)}
          type="button"
          className={styles.SmallButton}
        >
          Back
        </button>
        <button
        className={styles.SmallButton}
          disabled={!content.trim()}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default EditComment;