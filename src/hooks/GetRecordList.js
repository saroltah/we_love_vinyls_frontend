import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";

function GetRecordList(filter="") {
  const [records, setRecords] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const conditionalUrl = (filter, query) => {
          let url = '/records/';
          if (filter) {
            url += `?${filter}`;
          } else if (query) {
            url += `?search=${query}`;
          }
          return url;
        }
        
        const response = await axiosReq.get(conditionalUrl(filter, query));
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
  }, [filter, query, pathname]);

  return {
    filter, records, loaded, setRecords, setLoaded, query, setQuery
  };}

  
export default GetRecordList;