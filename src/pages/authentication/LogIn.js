import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSetCurrentUser } from "../../context/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";
import styles from "../../styles/AddEditPost.module.css"

function LogIn() {
  const setCurrentUser = useSetCurrentUser();
  const [logInDetails, setLogInDetails] = useState({
    username: "",
    password: "",
  });
  const { username, password } = logInDetails;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", logInDetails);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const changeLogInDetails = (event) => {
    setLogInDetails({
      ...logInDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Form onSubmit={handleLogIn} className={styles.AddEditPost}>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={changeLogInDetails}
          />
        </Form.Group>
        {errors.username?.map((message, i) => (
          <Alert key={i} variant="danger">
            {message}
          </Alert>
        ))}
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={changeLogInDetails}
          />
        </Form.Group>
        {errors.password?.map((message, i) => (
          <Alert key={i} variant="danger">
            {message}
          </Alert>
        ))}
        <button variant="primary" type="submit" className={styles.Button}>
          Log in!
        </button>
        {errors.non_field_errors?.map((message, i) => (
          <Alert key={i} variant="danger">
            {message}
          </Alert>
        ))}
      </Form>
    </div>
  );
}
export default LogIn;
