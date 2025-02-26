import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useHistory, useParams } from 'react-router-dom';
import { axiosRes } from '../../api/AxiosDefaults';
import { useCurrentUser } from '../../context/CurrentUserContext';
import styles from '../../styles/AddEditPost.module.css';
import Notification from '../../elements/Notification';

const EditPassword = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMesssage] = useState('');

  const [userDetails, setUserDetails] = useState({
    new_password1: '',
    new_password2: '',
  });
  const { new_password1, new_password2 } = userDetails;

  const [errors, setErrors] = useState({});

  const handlePasswordChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      history.push('/');
    }
  }, [currentUser, history, id]);

  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post('/dj-rest-auth/password/change/', userDetails);
      setTimeout(() => {
        history.goBack();
      }, 2000);
      setShowNotification(true);
      setNotificationMesssage('Password updated successfully!');
    } catch (err) {
      //console.log(err);
      setShowNotification(true);
      setNotificationMesssage('ERROR! Try again!');
      setErrors(err.response?.data);
    }
  };

  return (
    <Container>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <Form
        onSubmit={handleSubmitPassword}
        className={styles.AddEditPost}
      >
        <Form.Group>
          <Form.Label>New password</Form.Label>
          <Form.Control
            placeholder='New password'
            type='password'
            value={new_password1}
            onChange={handlePasswordChange}
            name='new_password1'
          />
        </Form.Group>
        {errors?.new_password1?.map((message, idx) => (
          <Alert
            key={idx}
            variant='danger'
          >
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder='Confirm new password'
            type='password'
            value={new_password2}
            onChange={handlePasswordChange}
            name='new_password2'
          />
        </Form.Group>
        {errors?.new_password2?.map((message, idx) => (
          <Alert
            key={idx}
            variant='alert'
          >
            {message}
          </Alert>
        ))}
        <button
          className={styles.Button}
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <button
          type='submit'
          className={styles.Button}
        >
          Save
        </button>
      </Form>
    </Container>
  );
};

export default EditPassword;
