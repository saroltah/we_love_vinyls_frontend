import React from "react";
import AllRecords from "./AllRecords";
import { useCurrentUser } from "../../context/CurrentUserContext"

function MyAdvertisedRecords() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `advertiser=${profile_id}`

  return (
    <div>
    <AllRecords
    message="You haven't uploaded any records."
    filter={filter_data}
  />

</div>
  )}
export default MyAdvertisedRecords;
