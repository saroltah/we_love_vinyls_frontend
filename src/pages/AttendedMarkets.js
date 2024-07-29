import React from "react";
import AllMarkets from "./AllMarkets";
import { useCurrentUser } from "../context/CurrentUserContext"

function MyMarkets() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `?member=${profile_id}`

  return (
    <div>
    <AllMarkets
    message="You haven't organized any market."
    filter={filter_data}
  />
</div>
  )}
export default MyMarkets;
