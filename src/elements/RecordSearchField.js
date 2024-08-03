import React from "react";
import { Form, } from "react-bootstrap";
import styles from "../styles/SearchField.module.css"

function RecordSearchField({ query, setQuery })  {

return (
    <Form  className={styles.SearchField}
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