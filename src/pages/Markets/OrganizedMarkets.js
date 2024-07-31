import React from "react";
import AllMarkets from "./AllMarkets";

function OrganizedMarkets(props) {

  const profile_id = props.profile_id || "";
  const filter_data = `organizer=${profile_id}`

  return (
    <div>
    <AllMarkets
    message="The user haven't organized any market yet."
    filter={filter_data}
  />
</div>
  )}
export default OrganizedMarkets;
