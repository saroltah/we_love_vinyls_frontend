import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Loading from "../elements/Loading";
import { Image } from "react-bootstrap";
import Upload from "../assets/upload.png";

function AddRecord() {
  const [errors, setErrors] = useState({});

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

  function changeRecordDetails(event) {
    setRecordDetails({
      ...recordDetails,
      [event.target.name]: event.target.value,
    });
  }

  function changeRecordImage(event) {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setRecordDetails({
        ...recordDetails,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  return (
    <div>
      <Form>
        <Form.Group>
          {image ? (
            <>
              <figure>
                <Image src={image} rounded />
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
              <Loading message="Upload an image" />
            </Form.Label>
          )}

          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={changeRecordImage}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            placeholder="Artist"
            name="artist"
            value={artist}
            onChange={changeRecordDetails}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={changeRecordDetails}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            as="select"
            name="genre"
            value={genre}
            onChange={changeRecordDetails}>
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
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Track List</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="tracklist"
            value={tracklist}
            onChange={changeRecordDetails}
            placeholder="e.g. 1. Song1 2. Song2"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            as="select"
            name="condition"
            value={condition}
            onChange={changeRecordDetails}>
            <option value="new">New</option>
            <option value="good">Good</option>
            <option value="used">Used</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Released</Form.Label>
          <Form.Control
            type="number"
            min={1900}
            max={2024}
            name="released"
            value={released}
            placeholder="e.g. 1989"
            onChange={changeRecordDetails}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. London, U.K."
            name="location"
            value={location}
            onChange={changeRecordDetails}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. 40 €"
            name="price"
            value={price}
            onChange={changeRecordDetails}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            value={contact}
            placeholder="e.g. example@example.com"
            onChange={changeRecordDetails}
          />
        </Form.Group>
        <Button onClick={() => {}}>Back</Button>
        <Button type="submit">Add Record</Button>
      </Form>
    </div>
  );
}

export default AddRecord;
