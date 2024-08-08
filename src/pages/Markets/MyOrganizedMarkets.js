import React from "react";
import AllMarkets from "./AllMarkets";
import { useCurrentUser } from "../../context/CurrentUserContext"

function MyOrganizedMarkets() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `organizer=${profile_id}`

  return (
    <div>
    <AllMarkets
    message="No markets to show..."
    filter={filter_data}
  />
</div>
  )}
export default MyOrganizedMarkets;
