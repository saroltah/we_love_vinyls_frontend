import React from "react";
import Loading from "../elements/Loading";
import GetMarketList from "../hooks/GetMarketList";
import ShowMarket from "./ShowMarket";
import MarketSearchField from "../elements/MarketSearchField";


function AllMarkets({ message, filter }) {

  const {markets, setMarkets, loaded, query, setQuery} = GetMarketList(filter)
  const hasFilter = filter && filter.trim() !== "";
  return (
    <div>
      <div>
        <p>Markets</p>
        {!hasFilter && (
        <MarketSearchField query = {query} setQuery={setQuery}/>
        )}
        {loaded ? (
          <>
            {markets.results.length > 0 ? (
              markets.results.map((market) => (
                <div key={market.id}>
                  <ShowMarket {...market} setMarkets={setMarkets} />
                </div>
              ))
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
    </div>
  );
}

export default AllMarkets;
