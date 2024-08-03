import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/AddEditPost.module.css"

function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpDetails;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const ChangeSignUpDetails = (event) => {
    setSignUpDetails({
      ...signUpDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpDetails, {
        withCredentials: true,
      });
      history.push("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSignUp} className={styles.AddEditPost}>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={ChangeSignUpDetails}
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
            name="password1"
            placeholder="Password"
            value={password1}
            onChange={ChangeSignUpDetails}
          />
        </Form.Group>
        {errors.password1?.map((message, i) => (
          <Alert key={i} variant="danger">
            {message}
          </Alert>
        ))}
        <Form.Group controlId="ConfirmedPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={ChangeSignUpDetails}
            autoComplete="username"
          />
          <Form.Text className="text-muted">
            The password needs to be min 8 characters.
          </Form.Text>
        </Form.Group>
        {errors.password2?.map((message, i) => (
          <Alert key={i} variant="danger">
            {message}
          </Alert>
        ))}
        <Button type="submit" className={styles.Button}>
          Sign up!
        </Button>
      </Form>
    </div>
  );
}
export default SignUp;
