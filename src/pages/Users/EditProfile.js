import React, { useEffect, useRef, useState } from "react";

import {Form, Button, Alert} from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults"

import Image from "react-bootstrap/Image";
import upload from "../../assets/upload.png";

import styles from "../../styles/AddEditPost.module.css"

function EditProfile() {
  const [errors, setErrors] = useState({});

  const [profileDetails, setProfileDetails] = useState({
    preferred_music: "",
    about_me: "",
    image: "",
  });
  const {
    preferred_music, about_me,
            image, 
  } = profileDetails;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/users/${id}/`);
        const { preferred_music, about_me,
            image, liked_record_count,
            attended_market_count, is_member } = data;

        is_member ? setProfileDetails({ preferred_music, about_me,
            image, liked_record_count,
            attended_market_count,   }) : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const changeProfileDetails = (event) => {
    setProfileDetails({
      ...profileDetails,
      [event.target.name]: event.target.value,
    });
  };

  const submitProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (imageInput.current.files.length > 0) {
        formData.append("image", imageInput.current.files[0]);
      } else if (profileDetails.image) {
        formData.append("image", profileDetails.image);
      }
    if (profileDetails.preferred_music) {
        formData.append("preferred_music", profileDetails.preferred_music);
      }
  
      if (profileDetails.about_me) {
        formData.append("about_me", profileDetails.about_me);
      }
    
    try {
      await axiosReq.put(`/users/${id}/`, formData);
      history.push(`/users/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  function changeProfileImage(event) {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setProfileDetails({
        ...profileDetails,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  return (
  <div>
    <Form onSubmit={submitProfile} className={styles.AddEditPost}>
        <Form.Group>
      {image ? (
        <>
          <figure>
            <Image src={image} rounded height={100}/>
          </figure>
          <div>
            <Form.Label className="btn" htmlFor="image-upload">
              Change the image
            </Form.Label>
          </div>
        </>
      ) : (
        <Form.Label
          className="d-flex justify-content-center"
          htmlFor="image-upload">
          <img
            src={upload}
            alt="Upload"
          />
        </Form.Label>
      )}

      <Form.File
        id="image-upload"
        accept="image/*"
        onChange={changeProfileImage}
        ref={imageInput}
      />
    </Form.Group>

        <Form.Group>
          <Form.Label>Preferred music</Form.Label>
          <Form.Control
            type="text"
            placeholder="my favourite genre and bands..."
            name="preferred_music"
            value={preferred_music}
            onChange={changeProfileDetails}
          />
        </Form.Group>
        {errors?.preferred_music?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}


        <Form.Group>
          <Form.Label>About me</Form.Label>
          <Form.Control
            type="text"
            placeholder="About me.."
            name="about_me"
            value={about_me}
            onChange={changeProfileDetails}
          />
        </Form.Group>
        {errors?.about_me?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
  
        <Button onClick={() => history.goBack()} className={styles.Button}>Back</Button>
        <Button type="submit" className={styles.Button}>Edit Profile</Button>
      </Form>
      </div>
  );
}

export default EditProfile