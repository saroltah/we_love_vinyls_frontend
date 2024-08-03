import React from "react";
import Loading from "../../elements/Loading";
import GetRecordList from "../../hooks/GetRecordList";
import ShowRecord from "./ShowRecord";
import RecordSearchField from "../../elements/RecordSearchField";
import AddRecordDropdown from "../../elements/AddRecordDropdown";
import { useCurrentUser } from "../../context/CurrentUserContext"

function AllRecords({ message, filter }) {

const {records, setRecords, loaded, query, setQuery} = GetRecordList(filter)
const hasFilter = filter && filter.trim() !== "";
const currentUser = useCurrentUser();

  return (
    <div>
      {currentUser ? (
      <AddRecordDropdown/>): null}
      <div>
        {!hasFilter && (
        <RecordSearchField query = {query} setQuery={setQuery}/>
        )}
        {loaded ? (
          <>
            {records.results.length > 0 ? (
              records.results.map((record) => (
                <div key={record.id}>
                  <ShowRecord {...record} setRecords={setRecords} advertiser_id={record.advertiser_id}/>
                </div>
              ))
            ) : (
              <div>
                <p>{message || "No records"}</p>
              </div>
            )}
          </>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default AllRecords;
