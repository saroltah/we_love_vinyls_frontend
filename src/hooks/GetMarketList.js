import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";

function GetMarketList(filter="") {
  const [markets, setMarkets] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await axiosReq.get(`/markets/${filter}`);
        const { data } = response;
        console.log("Api response:", data);
        if (Array.isArray(data)) {
          setMarkets({ results: data });
        } else if (Array.isArray(data.results)) {
          setMarkets({ results: data.results });
        } else {
          console.error("no result problem:", data);
        }
        setLoaded(true);
      } catch (err) {
        console.log("Error problem:", err);
        setMarkets({ results: [] });
        setLoaded(true);
      }
    };
  
    setLoaded(false);
    fetchMarkets();
  }, [filter,pathname]);

  return {
    filter, markets, loaded, setMarkets, setLoaded
  };}

  
export default GetMarketList;