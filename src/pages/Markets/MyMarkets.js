import React from "react";
import AllMarkets from "./AllMarkets";
import AttendedMarkets from "./AttendedMarkets";
import { useCurrentUser } from "../../context/CurrentUserContext"
import styles from "../../styles/Lists.module.css"

function MyMarkets() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `organizer=${profile_id}`

  return (
    <div>
    <h5> My Markets </h5> 
    <AllMarkets
    message="You haven't organized any market."
    filter={filter_data}
  />

<h3 className={styles.h3}>I attend:</h3>
<AttendedMarkets/>
</div>
  )}
export default MyMarkets;
