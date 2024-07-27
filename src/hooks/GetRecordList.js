import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";

function GetRecordList() {
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

  return {
    records, loaded, setRecords, setLoaded
  };}

  
export default GetRecordList;