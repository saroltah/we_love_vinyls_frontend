import React from "react";
import AllRecords from "./AllRecords";
import { useCurrentUser } from "../../context/CurrentUserContext";

//Select records the current user uploaded
function MyAdvertisedRecords() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `advertiser=${profile_id}`

  return (
    <div>
    <AllRecords
    message="No records to show..."
    filter={filter_data}
  />

</div>
  )}
export default MyAdvertisedRecords;
