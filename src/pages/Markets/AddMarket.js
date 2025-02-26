import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/AxiosDefaults';
import styles from '../../styles/AddEditPost.module.css';
import Notification from '../../elements/Notification';
import { useRedirect } from '../../hooks/useRedirect';

function AddMarket() {
  useRedirect('loggedOut');
  const [errors, setErrors] = useState({});

  const [marketDetails, setMarketDetails] = useState({
    country: '',
    city: '',
    address: '',
    date: '',
    start: '',
    end: '',
    description: '',
  });

  const { country, city, address, date, start, end, description } =
    marketDetails;

  const history = useHistory();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMesssage] = useState('');

  function handleMarketDetailsChange(event) {
    setMarketDetails({
      ...marketDetails,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmitMarket = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('country', country);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('date', date);
    formData.append('start', start);
    formData.append('end', end);
    formData.append('description', description);

    try {
      const { data } = await axiosReq.post('/markets/', formData);
      setTimeout(() => {
        history.push(`/markets/${data.id}`);
      }, 2000);
      setShowNotification(true);
      setNotificationMesssage('Market added successfully!');
    } catch (err) {
      setShowNotification(true);
      setNotificationMesssage('ERROR! Try again!');
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <Form
        onSubmit={handleSubmitMarket}
        className={styles.AddEditPost}
      >
        <Form.Group controlId='CountryID'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Country'
            name='country'
            value={country}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.country?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}

        <Form.Group controlId='CityID'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='City'
            name='city'
            value={city}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.city?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}

        <Form.Group controlId='AddressID'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            name='address'
            value={address}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.address?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}

        <Form.Group controlId='DateID'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            name='date'
            value={date}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.date?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}

        <Form.Group controlId='StartID'>
          <Form.Label>Start</Form.Label>
          <Form.Control
            type='time'
            name='start'
            value={start}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.start?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}

        <Form.Group controlId='EndID'>
          <Form.Label>End</Form.Label>
          <Form.Control
            type='time'
            name='end'
            value={end}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.end?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}

        <Form.Group controlId='DescriptionID'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={6}
            name='description'
            value={description}
            onChange={handleMarketDetailsChange}
          />
        </Form.Group>
        {errors?.description?.map((message, idx) => (
          <Alert
            variant='danger'
            key={idx}
          >
            {message}
          </Alert>
        ))}
        <button
          onClick={() => history.goBack()}
          className={styles.Button}
        >
          Back
        </button>
        <button
          type='submit'
          className={styles.Button}
        >
          Add Market
        </button>
      </Form>
    </div>
  );
}

export default AddMarket;
