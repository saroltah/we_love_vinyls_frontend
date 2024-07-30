import React from "react";
import { Form } from "react-bootstrap";

function MarketSearchField({ query, setQuery })  {

return (
    <Form
    onSubmit={(event) => event.preventDefault()}
  >
    <Form.Control
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      type="text"
      placeholder="Search for cities or countries"
    />
  </Form> );}

  
export default MarketSearchField;