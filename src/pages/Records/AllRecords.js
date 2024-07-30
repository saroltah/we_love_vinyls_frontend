import React from "react";
import Loading from "../../elements/Loading";
import GetRecordList from "../../hooks/GetRecordList";
import ShowRecord from "./ShowRecord";
import RecordSearchField from "../../elements/RecordSearchField";

function AllRecords({ message, filter }) {

const {records, setRecords, loaded, query, setQuery} = GetRecordList(filter)
const hasFilter = filter && filter.trim() !== "";

  return (
    <div>
      <div>
        <p>Records</p>
        {!hasFilter && (
        <RecordSearchField query = {query} setQuery={setQuery}/>
        )}
        {loaded ? (
          <>
            {records.results.length > 0 ? (
              records.results.map((record) => (
                <div key={record.id}>
                  <ShowRecord {...record} setRecords={setRecords} />
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
