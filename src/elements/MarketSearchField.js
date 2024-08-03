import React from "react";
import { Form } from "react-bootstrap";
import styles from "../styles/SearchField.module.css"

function MarketSearchField({ query, setQuery })  {

return (
    <Form
    onSubmit={(event) => event.preventDefault()}
    className={styles.SearchField}
  >
    <Form.Control
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      type="text"
      placeholder="Search for cities or countries"
      className={styles.SearchInput}
    />
  </Form> );}

  
export default MarketSearchField;