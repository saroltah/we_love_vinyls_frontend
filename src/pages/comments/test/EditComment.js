import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../../api/AxiosDefaults"

function EditComment(props) {
  const { id, content, setEditCommentForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);

  const changeEditForm = (event) => {
    setFormContent(event.target.value);
  };

  const SubmitEditForm = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
              }
            : comment;
        }),
      }));
      setEditCommentForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={SubmitEditForm}>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={formContent}
          onChange={changeEditForm}
          rows={3}
        />
      </Form.Group>
      <div className="text-right">
        <button
          onClick={() => setEditCommentForm(false)}
          type="button"
        >
          back
        </button>
        <button
          disabled={!content.trim()}
          type="submit"
        >
          Save changes
        </button>
      </div>
    </Form>
  );
}

export default EditComment;