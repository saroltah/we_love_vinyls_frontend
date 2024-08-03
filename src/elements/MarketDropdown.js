import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import AddMarket from '../pages/Markets/AddMarket';
import styles from "../styles/AddPostDropdown.module.css"

function MarketDropdown() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className={styles.AddButton}
        >
          + Add Market!
        </Button>
        <Collapse in={open}>
          <div>
            <AddMarket/>
          </div>
        </Collapse>
      </>
    );
  }
  
  export default MarketDropdown;