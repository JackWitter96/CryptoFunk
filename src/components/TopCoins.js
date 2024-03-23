import React, { useEffect, useState } from "react";
import { fetchMarketData } from "./MarketData";
import '../index.css';
import './css/topCoins.css';

function TopCoins() {
  const [data, setData] = useState([]);
  const [apiLoad, setApiLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetchMarketData();
        setData(jsonData);
        setApiLoad(false);
      } catch (error) {
        setApiLoad(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="market" className="market-section">
      <div className="market-content">
        <h2 className="text-center font-bold text-5xl pb-10 header">Top 5 Coins</h2>
        <div className="flex flex-wrap justify-center">
          {!apiLoad && data.slice(0, 5).map((item) => (
            <div key={item.id} className="flex flex-col items-center m-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 mb-2"
              />
              <span className="font-bold text-white">{item.name}</span>
              <div className="text-white ml-8 mr-8">
                <div className="text-center">£{item.current_price.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div>
                  (24h): <span style={{ color: item.price_change_percentage_24h >= 0 ? '#00ff00' : '#000000' }}>
                    {item.price_change_percentage_24h.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {apiLoad && (
          <div className="text-center py-4">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </section>
  );
}

export default TopCoins;
