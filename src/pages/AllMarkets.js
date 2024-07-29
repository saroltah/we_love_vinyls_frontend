import React from "react";
import Loading from "../elements/Loading";
import GetMarketList from "../hooks/GetMarketList";
import ShowMarket from "./ShowMarket";

function AllMarkets({ message, filter }) {

  const {markets, setMarkets, loaded,} = GetMarketList(filter)
  return (
    <div>
      <div>
        <p>Markets</p>
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
