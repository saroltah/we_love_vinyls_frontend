import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import AddRecord from '../pages/Records/AddRecord';
import styles from "../styles/AddPostDropdown.module.css"

function RecordDropdown() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className={styles.AddButton}
        >
          + Add Record!
        </Button>
        <Collapse in={open}>
          <div>
            <AddRecord/>
          </div>
        </Collapse>
      </>
    );
  }
  
  export default RecordDropdown;