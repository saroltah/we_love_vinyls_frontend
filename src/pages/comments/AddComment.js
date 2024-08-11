import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProfilePic from '../../elements/ProfilePic';
import { axiosRes } from '../../api/AxiosDefaults';
import styles from '../../styles/Comment.module.css';
import Notification from '../../elements/Notification';

function AddComment(props) {
  const { commented_record, setComments, member_image, member_id, setRecord } =
    props;
  const [content, setContent] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMesssage] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post('/comments/', {
        content,
        commented_record,
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
      setContent('');
      setShowNotification(true);
      setNotificationMesssage('Comment added successfully!');
    } catch (err) {
      setShowNotification(true);
      setNotificationMesssage('ERROR! Try again!');
      //console.log(err);
    }
  };

  return (
    <>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <Form
        onSubmit={handleSubmitComment}
        className={styles.AddComment}
      >
        <Form.Group>
          <InputGroup>
            <Link to={`/users/${member_id}`}>
              <ProfilePic src={member_image} />
            </Link>
            <Form.Control
              placeholder='Write your comment here.'
              as='textarea'
              value={content}
              onChange={handleContentChange}
              rows={3}
              className={styles.Textarea}
            />
          </InputGroup>
        </Form.Group>
        <button
          type='submit'
          className={styles.Button}
          disabled={!content.trim()}
        >
          Send comment
        </button>
      </Form>
    </>
  );
}

export default AddComment;
