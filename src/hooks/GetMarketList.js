import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";
import { useCurrentUser } from "../context/CurrentUserContext";

function GetMarketList(filter="") {
  const [markets, setMarkets] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser()

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const conditionalUrl = (filter, query) => {
          let url = '/markets/';
          if (filter) {
            url += `?${filter}`;
          } else if (query) {
            url += `?search=${query}`;
          }
          return url;
        }
        const response = await axiosReq.get(conditionalUrl(filter, query));
        const { data } = response;
        if (Array.isArray(data)) {
          setMarkets({ results: data });
        } else if (Array.isArray(data.results)) {
          setMarkets({ results: data.results });
        } else {
          //console.error("no result problem:", data);
        }
        setLoaded(true);
      } catch (err) {
        //console.log("Error problem:", err);
        setMarkets({ results: [] });
        setLoaded(true);
      }
    };
  
    setLoaded(false);
    fetchMarkets();
  }, [filter, query, pathname]);

  return {
    filter, markets, loaded, setMarkets, setLoaded, query, setQuery, currentUser,
  };}

  
export default GetMarketList;