import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import AddRecord from '../pages/Records/AddRecord';

function AddRecordDropdown() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Add Record!
        </Button>
        <Collapse in={open}>
          <div>
            <AddRecord/>
          </div>
        </Collapse>
      </>
    );
  }
  
  export default AddRecordDropdown;
