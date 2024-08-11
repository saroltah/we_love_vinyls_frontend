import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import AddMarket from '../pages/Markets/AddMarket';
import styles from '../styles/AddPostDropdown.module.css';

/*
  Click on +AddMarket button
  Form drops down
*/
function MarketDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-controls='example-collapse-text'
        aria-expanded={open}
        className={styles.AddButton}
      >
        + Add Market!
      </button>
      <Collapse in={open}>
        <div>
          <AddMarket />
        </div>
      </Collapse>
    </>
  );
}

export default MarketDropdown;
