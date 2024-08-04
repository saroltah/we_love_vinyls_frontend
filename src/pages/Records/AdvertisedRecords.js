import React from "react";
import AllRecords from "./AllRecords";

function AdvertisedRecords(props) {

  const profile_id = props.profile_id || "";
  const filter_data = `advertiser=${profile_id}`
  
  return (
    <div>
    <AllRecords
    message="The user hasn't uploaded any record yet."
    filter={filter_data}
    showDropdown={false}
  />

</div>
  )}
export default AdvertisedRecords;
