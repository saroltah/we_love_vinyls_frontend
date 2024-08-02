import React from "react";
import { Form } from "react-bootstrap";
import styles from "../styles/SearchField.module.css"

function RecordSearchField({ query, setQuery })  {

return (
    <Form
    onSubmit={(event) => event.preventDefault()}
  >
    <Form.Control
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      type="text"
      placeholder="Search for records"
    />
  </Form> );}

  
export default RecordSearchField;