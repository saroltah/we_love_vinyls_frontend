import React from 'react';
import Loading from '../../elements/Loading';
import useGetMarketList from '../../hooks/useGetMarketList';
import ShowMarket from './ShowMarket';
import MarketSearchField from '../../elements/MarketSearchField';
import { useCurrentUser } from '../../context/CurrentUserContext';
import MarketDropdown from '../../elements/MarketDropdown';
import { fetchMoreData } from '../../utils/utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../../styles/Lists.module.css';

/*
Make the list of markets 
Infinitive scroll
Logic on display of search field
Logic on display of +Add market dropdown
*/
function AllMarkets({ message, filter, showDropdown = true }) {
  const { markets, setMarkets, loaded, query, setQuery } =
    useGetMarketList(filter);
  const hasFilter = filter && filter.trim() !== '';
  const currentUser = useCurrentUser();

  return (
    <div>
      {currentUser && showDropdown && <MarketDropdown />}
      {!hasFilter && (
        <MarketSearchField
          query={query}
          setQuery={setQuery}
        />
      )}
      {loaded ? (
        <>
          {markets.results.length > 0 ? (
            <InfiniteScroll
            dataLength={markets.results.length}
            loader={<Loading />}
            hasMore={!!markets.next}
            next={() => fetchMoreData(markets, setMarkets)}
          >
            {markets.results.map((market) => (
              <ShowMarket
                key={market.id}
                {...market}
                setMarkets={setMarkets}
              />
            ))}
          </InfiniteScroll>
          ) : (
            <div>
              <p className={styles.Message}>{message || 'No markets found'}</p>
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

export default AllMarkets;
