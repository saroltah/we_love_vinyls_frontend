import React from "react";
import Loading from "../../elements/Loading";
import GetMarketList from "../../hooks/GetMarketList";
import ShowMarket from "./ShowMarket";
import MarketSearchField from "../../elements/MarketSearchField";
import { useCurrentUser } from "../../context/CurrentUserContext"
import MarketDropdown from "../../elements/MarketDropdown";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";

/*
Make the list of markets 
Infinitive scroll
Logic on display of search field
Logic on display of +Add market dropdown
*/
function AllMarkets({ message, filter, showDropdown = true }) {

  const {markets, setMarkets, loaded, query, setQuery} = GetMarketList(filter)
  const hasFilter = filter && filter.trim() !== "";
  const currentUser = useCurrentUser();
  
  return (
    <div> 
        {currentUser && showDropdown && <MarketDropdown/>}
        {!hasFilter && (
        <MarketSearchField query = {query} setQuery={setQuery}/>
        )}
        {loaded ? (
          <>
          
            {markets.results.length > 0 ? (

              <InfiniteScroll
                children={markets.results.map((market) => (
                  <ShowMarket key={market.id} {...market} setMarkets={setMarkets} />
                ))}
                dataLength={markets.results.length}
                loader={<Loading />}
                hasMore={!!markets.next}
                next={() => fetchMoreData(markets, setMarkets)}
              />
            ) : (
              <div>
                <p>{message || "No markets"}</p>
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
