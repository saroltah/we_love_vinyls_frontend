import React from "react";
import Loading from "../elements/Loading";
import GetRecordList from "../hooks/GetRecordList";
import ShowRecord from "./ShowRecord";

function AllRecords({ message, filter }) {

  const {records, setRecords, loaded,} = GetRecordList(filter)
  return (
    <div>
      <div>
        <p>Records</p>
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
