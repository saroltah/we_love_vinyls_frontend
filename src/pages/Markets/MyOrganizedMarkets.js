import React from "react";
import AllMarkets from "./AllMarkets";
import { useCurrentUser } from "../../context/CurrentUserContext"
import styles from "../../styles/Lists.module.css"

function MyOrganizedMarkets() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `organizer=${profile_id}`

  return (
    <div>
    <AllMarkets
    message="You haven't organized any market."
    filter={filter_data}
  />
</div>
  )}
export default MyOrganizedMarkets;
