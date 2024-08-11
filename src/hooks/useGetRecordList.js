import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosReq } from '../api/AxiosDefaults';
import { useCurrentUser } from '../context/CurrentUserContext';

function useGetRecordList(filter = '') {
  const [records, setRecords] = useState({ results: [] });
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const conditionalUrl = (filter, query) => {
          //If there is filter, no search is shown

          let url = '/records/';
          if (filter) {
            url += `?${filter}`;
          } else if (query) {
            url += `?search=${query}`;
          }
          return url;
        };

        const response = await axiosReq.get(conditionalUrl(filter, query));
        const { data } = response;
        if (Array.isArray(data)) {
          setRecords({ results: data });
        } else if (Array.isArray(data.results)) {
          setRecords({ results: data.results });
        } else {
          //console.log(err);
        }
        setLoaded(true);
      } catch (err) {
        //console.log(err);
        setRecords({ results: [] });
        setLoaded(true);
      }
    };

    setLoaded(false);
    fetchRecords();
  }, [filter, query, pathname, currentUser]);

  return {
    filter,
    records,
    loaded,
    setRecords,
    setLoaded,
    query,
    setQuery,
  };
}

export default useGetRecordList;
