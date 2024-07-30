import React from "react";
import { Form } from "react-bootstrap";

function SearchField({ query, setQuery })  {

return (
    <Form
    onSubmit={(event) => event.preventDefault()}
  >
    <Form.Control
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      type="text"
      placeholder="Search records"
    />
  </Form> );}

  
export default SearchField;