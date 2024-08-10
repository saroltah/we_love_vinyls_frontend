import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import PicStyles from "../../styles/UploadPic.module.css";
import upload from "../../assets/upload.png";
import Notification from "../../elements/Notification";
import styles from "../../styles/AddEditPost.module.css";

function AddRecord() {

  const [errors, setErrors] = useState({});

  const nodeRef = useRef(null);
 
  const [recordDetails, setRecordDetails] = useState({
    image: "",
    artist: "",
    title: "",
    genre: "",
    tracklist: "",
    condition: "",
    released: "",
    location: "",
    price: "",
    contact: "",
  });

  const {
    image,
    artist,
    title,
    genre,
    tracklist,
    condition,
    released,
    location,
    price,
    contact,
  } = recordDetails;

  const imageInput = useRef(null);
  const history = useHistory();
  const [showNotification, setShowNotification] = useState(false)

  function handleRecordDetailsChange(event) {
    setRecordDetails({
      ...recordDetails,
      [event.target.name]: event.target.value,
    });
  }

  function handleRecordImageChange(event) {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setRecordDetails({
        ...recordDetails,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  const handleSubmitRecord = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append("artist", artist);
    formData.append("title", title);
    formData.append("genre", genre);
    formData.append("tracklist", tracklist);
    formData.append("condition", condition);
    formData.append("released", released);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("contact", contact);

    try {
      const { data } = await axiosReq.post("/records/", formData);
      setTimeout(() => {
      history.push(`/records/${data.id}`)
    }, 2000);
      setShowNotification(true)
    } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div ref={nodeRef}>
      <Form onSubmit={handleSubmitRecord} className={styles.AddEditPost}> 
        <Form.Group>
          {image ? (
            <>
              <figure>
                <Image src={image} rounded width={200}/>
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
                className={PicStyles.UploadPic}
              
              />
            </Form.Label>
          )}

          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={handleRecordImageChange}
            ref={imageInput}
          />
        </Form.Group>

        {errors?.image?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="ArtistID">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            placeholder="Artist"
            name="artist"
            value={artist}
            onChange={handleRecordDetailsChange}
          />
        </Form.Group>
        {errors?.artist?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="TitleID">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleRecordDetailsChange}
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="GenreID">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            as="select"
            name="genre"
            value={genre}
            onChange={handleRecordDetailsChange}>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="blues">Blues</option>
            <option value="country">Country</option>
            <option value="electronic">Electronic</option>
            <option value="punk">Punk</option>
            <option value="classical">Classical</option>
            <option value="alternative-rock">Alternative Rock</option>
            <option value="progressive-rock">Progressive Rock</option>
            <option value="folk-music">Folk Music</option>
            <option value="synth-pop">Synth-pop</option>
            <option value="hip-hop">Hip-hop</option>
            <option value="jazz">Jazz</option>
            <option value="funk">Funk</option>
            <option value="reggae">Reggae</option>
            <option value="disco">Disco</option>
            <option value="soul">Soul</option>
            <option value="dance">Dance</option>
            <option value="ska">Ska</option>
            <option value="indie-rock">Indie Rock</option>
            <option value="bachata">Bachata</option>
            <option value="techno">Techno</option>
            <option value="house">House</option>
            <option value="grunge">Grunge</option>
            <option value="hard-rock">Hard Rock</option>
            <option value="emo">Emo</option>
            <option value="black-metal">Black Metal</option>
            <option value="r-and-b">R&B</option>
            <option value="glam-metal">Glam Metal</option>
            <option value="death-metal">Death Metal</option>
            <option value="other">Other</option>
            <option value="dubstep">Dubstep</option>
            <option value="gothic">Gothic</option>
            <option value="folk-metal">Folk Metal</option>
            <option value="heavy-metal">Heavy Metal</option>
          </Form.Control>
        </Form.Group>
        {errors?.genre?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="TrackListID">
          <Form.Label>Track List</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="tracklist"
            value={tracklist}
            onChange={handleRecordDetailsChange}
            placeholder="e.g. 1. Song1 2. Song2"
          />
        </Form.Group>
        {errors?.tracklist?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="ConditionID">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            as="select"
            name="condition"
            value={condition}
            onChange={handleRecordDetailsChange}>
            <option value="new">New</option>
            <option value="good">Good</option>
            <option value="used">Used</option>
          </Form.Control>
        </Form.Group>
        {errors?.condition?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="ReleasedID">
          <Form.Label>Released</Form.Label>
          <Form.Control
            type="number"
            min={1900}
            max={2024}
            name="released"
            value={released}
            placeholder="e.g. 1989"
            onChange={handleRecordDetailsChange}
          />
        </Form.Group>
        {errors?.released?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="LocationID">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. London, U.K."
            name="location"
            value={location}
            onChange={handleRecordDetailsChange}
          />
        </Form.Group>
        {errors?.location?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="PriceID">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. 40 €"
            name="price"
            value={price}
            onChange={handleRecordDetailsChange}
          />
        </Form.Group>
        {errors?.price?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="ContactID">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            value={contact}
            placeholder="e.g. example@example.com"
            onChange={handleRecordDetailsChange}
          />
        </Form.Group>
        {errors?.cobtact?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <button onClick={() => history.goBack()} className={styles.Button}> Back </button>
        <button type="submit" className={styles.Button}>Add Record</button>
      </Form>
      {showNotification && (
            <Notification
              message="Record succesfully added"
              onClose={() => setShowNotification(false)}
            />
          )}
    </div>
  );
}

export default AddRecord;