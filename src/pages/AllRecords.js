import React, { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";
import ShowRecord from "./ShowRecord";

function AllRecords({ message }) {
  const [records, setRecords] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axiosReq.get("/records/");
        const { data } = response;
        console.log("Api response:", data);
        if (Array.isArray(data)) {
          setRecords({ results: data });
        } else if (Array.isArray(data.results)) {
          setRecords({ results: data.results });
        } else {
          console.error("no result problem:", data);
        }
        setLoaded(true);
      } catch (err) {
        console.log("Error problem:", err);
        setRecords({ results: [] });
        setLoaded(true);
      }
    };
  
    setLoaded(false);
    fetchRecords();
  }, [pathname]);

  return (
    <div>
      <div>
        <p>All records</p>
        {loaded ? (
          <>
            {records.results.length > 0 ? (
              records.results.map((record) => (
                <div key={record.id}>
                  console.log("Fetched Records:", records.results);
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
