import React from "react";
import AllMarkets from "./AllMarkets";
import AttendedMarkets from "./AttendedMarkets";
import { useCurrentUser } from "../context/CurrentUserContext"

function MyMarkets() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `?organizer__id=${profile_id}`

  return (
    <div>
    <AllMarkets
    message="You haven't organized any market."
    filter={filter_data}
  />

<h1>Attended markets:</h1>
<AttendedMarkets/>
</div>
  )}
export default MyMarkets;
