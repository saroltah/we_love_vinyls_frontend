import React from 'react';
import Loading from '../../elements/Loading';
import useGetRecordList from '../../hooks/useGetRecordList';
import ShowRecord from './ShowRecord';
import RecordSearchField from '../../elements/RecordSearchField';
import { useCurrentUser } from '../../context/CurrentUserContext';
import RecordDropdown from '../../elements/RecordDropdown';
import { fetchMoreData } from '../../utils/utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../../styles/Lists.module.css';

/*
Make the list of records
Infinitive scroll
Logic on display of search field
Logic on display of +Add record dropdown
*/
function AllRecords({ message, filter, showDropdown = true }) {
  const { records, setRecords, loaded, query, setQuery } =
    useGetRecordList(filter);
  const hasFilter = filter && filter.trim() !== '';
  const currentUser = useCurrentUser();

  return (
    <div>
      {currentUser && showDropdown && <RecordDropdown />}
      {!hasFilter && (
        <RecordSearchField
          query={query}
          setQuery={setQuery}
        />
      )}
      {loaded ? (
        <>
          {records.results.length > 0 ? (
            <InfiniteScroll
            dataLength={records.results.length}
            loader={<Loading />}
            hasMore={!!records.next}
            next={() => fetchMoreData(records, setRecords)}
          >
            {records.results.map((record) => (
              <ShowRecord
                key={record.id}
                {...record}
                setRecords={setRecords}
              />
            ))}
          </InfiniteScroll>
          ) : (
            <div>
              <p className={styles.Message}>{message || 'No records found'}</p>
            </div>
          )}
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default AllRecords;
