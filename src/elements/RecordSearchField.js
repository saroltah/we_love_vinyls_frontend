import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../styles/SearchField.module.css";

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
      className={styles.SearchInput}
    />
  </Form> );}

export default RecordSearchField;