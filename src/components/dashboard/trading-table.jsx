import Image from "next/image";
import React, { useState, useEffect } from "react";

function TradingMarket() {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const response = await fetch(
          "https://api.coinlore.net/api/ticker/?id=90,2679,2,257,80,1,89,2713,2321,58,48543,118"
        );
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    }

    fetchMarketData();
  }, []);

  return (
    <div className="market_pro_list">
      {marketData.map((coin) => (
        <div
          key={coin.id}
          className="flex justify-between items-center border-b-2 py-2"
        >
          <div className="flex items-center gap-2">
            <Image
              src={`/imgs/coins/${coin.symbol.toLowerCase()}-logo.png`}
              width={40}
              height={40}
              alt={`${coin.symbol} Logo`}
            />
            <div>
              <div className="pro_title ff_NunitoBold fc-353F52">
                {coin?.name}
              </div>
              <div className="text-muted-foreground">{coin?.symbol}</div>
            </div>
          </div>
          <div className="pro_detail">
            <div className="pro_price fs-15 fc-353F52">
              ${parseFloat(coin.price_usd).toFixed(3)}
            </div>
            <div className="flex flex-col items-center">
              <span
                className="change_value fc-8CC351 m-r-10"
                style={{
                  color:
                    coin.percent_change_24h < 0
                      ? "rgb(207, 32, 47)"
                      : "rgb(19, 178, 111)",
                }}
              >
                {coin.percent_change_24h}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TradingMarket;
