import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import styles from "../styles/Notification.module.css"

function Notification({message, onClose}) {
const [show, setShow] = useState(true)

useEffect(() => {
    const timer = setTimeout(() => {
    setShow(false);
    if (onClose) onClose();
}, 3000);
return () => clearTimeout(timer);
}, []);

  return (
    <div className = {styles.Container}>
    <Toast
    show={show}
    onClose={()=> setShow(false)}
    delay = {3000}
    autohide
    className = {styles.Notification}>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
    </div>
  );
}

export default Notification;