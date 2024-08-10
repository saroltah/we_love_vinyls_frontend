import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults"

import Image from "react-bootstrap/Image";
import upload from "../../assets/upload.png";

import styles from "../../styles/AddEditPost.module.css"

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../context/CurrentUserContext"

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

  const imageInput = useRef();
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
      try {
        const { data } = await axiosReq.get(`/users/${id}/`);
        const { preferred_music, about_me,
            image, liked_record_count,
            attended_market_count} = data;

     setProfileDetails({ preferred_music, about_me,
            image, liked_record_count,
            attended_market_count,   });
      } catch (err) {
        //console.log(err);
        history.push("/");
      }
    }else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const changeProfileDetails = (event) => {
    setProfileDetails({
      ...profileDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (profileDetails.preferred_music) {
      formData.append("preferred_music", profileDetails.preferred_music);
    }

    if (profileDetails.about_me) {
      formData.append("about_me", profileDetails.about_me);
    }

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput?.current?.files[0]);
    }    
    
    try {
      const { data } = await axiosReq.put(`/users/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      //console.log(err);
      setErrors(err.response?.data);
      }
  };

  
  return (
  <div>
    <Form onSubmit={handleSubmitProfile} className={styles.AddEditPost}>
        <Form.Group>
      {image && (
          <figure>
            <Image src={image} rounded height={100}/>
          </figure> )}
          {errors?.image?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
          </div>
        <Form.Label
          className="d-flex justify-content-center"
          htmlFor="image-upload">
          <img
            src={upload}
            alt="Upload"
            width={100}
          />
        </Form.Label>

      <Form.File
        id="image-upload"
        accept="image/*"
        ref={imageInput}
        onChange={(e) => {
          if (e.target.files.length) {
            setProfileDetails({
              ...profileDetails,
              image: URL.createObjectURL(e.target.files[0]),
            });
          }
        }}
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
  
        <button onClick={() => history.goBack()} className={styles.Button}>Back</button>
        <button type="submit" className={styles.Button}>Edit Profile</button>
      </Form>
      </div>
  );
}

export default EditProfile