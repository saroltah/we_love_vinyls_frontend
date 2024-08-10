import React from "react";
import AllRecords from "./AllRecords";
import { useCurrentUser } from "../../context/CurrentUserContext";

//Selects all the records, the current user marked "Going"
function LikedRecords() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const filter_data = `member=${profile_id}`
  

  return (
    <div>
    <AllRecords
    message="No records to show..."
    filter={filter_data}
    showDropdown={false}
  />
</div>
  )}
export default LikedRecords;
