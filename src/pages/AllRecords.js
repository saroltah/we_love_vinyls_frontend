import React from "react";
import Loading from "../elements/Loading";
import GetRecordList from "../hooks/GetRecordList";
import ShowRecord from "./ShowRecord";
import SearchField from "../elements/SearchField";

function AllRecords({ message, filter }) {

const {records, setRecords, loaded, query, setQuery} = GetRecordList(filter)
  return (
    <div>
      <div>
        <p>Records</p>
        <SearchField query = {query} setQuery={setQuery}/>
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
