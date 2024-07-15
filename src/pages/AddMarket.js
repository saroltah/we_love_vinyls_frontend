import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddMarket() {
  const [errors, setErrors] = useState({});

  const [marketDetails, setMarketDetails] = useState({
    country: "",
    city: "",
    address: "",
    date: "",
    start: "",
    end: "",
    description: "",
  });

  const { country, city, address, date, start, end, description } =
    marketDetails;

  function changeMarketDetails(event) {
    setMarketDetails({
      ...marketDetails,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="ArtistID">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            name="country"
            value={country}
            onChange={changeMarketDetails}
          />
        </Form.Group>
        <Form.Group controlId="CityID">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={changeMarketDetails}
          />
        </Form.Group>

        <Form.Group controlId="AddressID">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={changeMarketDetails}
          />
        </Form.Group>
        <Form.Group controlId="DateID">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={date}
            onChange={changeMarketDetails}
          />
        </Form.Group>
        <Form.Group controlId="StartID">
          <Form.Label>Start</Form.Label>
          <Form.Control
            type="time"
            name="start"
            value={start}
            onChange={changeMarketDetails}
          />
        </Form.Group>
        <Form.Group controlId="EndID">
          <Form.Label>End</Form.Label>
          <Form.Control
            type="time"
            name="end"
            value={end}
            onChange={changeMarketDetails}
          />
        </Form.Group>
        <Form.Group controlId="DescriptionID">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            value={description}
            onChange={changeMarketDetails}
          />
        </Form.Group>
        <Button onClick={() => {}}>Back</Button>
        <Button type="submit">Add Market</Button>
      </Form>
    </div>
  );
}

export default AddMarket;
