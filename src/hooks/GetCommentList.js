import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";

function GetCommentList(filter="") {
  const [comments, setComments] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axiosReq.get(`/comments/?${filter}`);
        const { data } = response;
        console.log("Api response:", data);
        if (Array.isArray(data)) {
          setComments({ results: data });
        } else if (Array.isArray(data.results)) {
          setComments({ results: data.results });
        } else {
          console.error("no result problem:", data);
        }
        setLoaded(true);
      } catch (err) {
        console.log("Error problem:", err);
        setComments({ results: [] });
        setLoaded(true);
      }
    };
  
    setLoaded(false);
    fetchComments();
  }, [filter, pathname]);

  return {
    filter, comments, loaded, setComments, setLoaded,
  };}

  
export default GetCommentList;