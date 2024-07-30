import React from "react";
import AllRecords from "./AllRecords";
import LikedRecords from "./LikedRecords";
import { useCurrentUser } from "../context/CurrentUserContext"

function MyRecords() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `advertiser__id=${profile_id}`

  return (
    <div>
    <AllRecords
    message="You haven't uploaded any records."
    filter={filter_data}
  />

<h1>Liked records:</h1>
<LikedRecords/>
</div>
  )}
export default MyRecords;
