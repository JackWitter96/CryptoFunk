import React, { useEffect, useState } from "react";
import { fetchMarketData } from "./MarketData";
import '../index.css';
import './css/market.css';

function Market() {

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
    <>
      <section id="market" className="market-section">
        <div className="">
          <div className="market-content">
            <h2 className="text-center font-bold text-5xl pb-10 header">Top 100 Chart</h2>
            <div className="market-content__coin-list" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <div className="table-container">
                <table className="table-auto mx-auto">
                  <thead className="table-headers">
                    <tr>
                      <th className="px-4 py-2 text-left text-white table-font-size">Coin</th>
                      <th className="px-4 py-2 text-left text-white table-font-size">Current Price</th>
                      <th className="px-4 py-2 text-left text-white table-data-market-cap">Market Cap</th>
                      <th className="px-4 py-2 text-left text-white table-data-market-rank">Market Rank</th>
                      <th className="px-4 py-2 text-left text-white table-data-market-high-24">High 24h</th>
                      <th className="px-4 py-2 text-left text-white table-data-market-low-24">Low 24h</th>
                      <th className="px-4 py-2 text-left text-white table-data-market-change-24">Price Change 24h</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiLoad && (
                      <tr>
                        <td colSpan="8" className="text-center py-4">
                          <span className="loader"></span>
                        </td>
                      </tr>
                    )}
                    {!apiLoad && data.map((item) => (
                      <tr
                        to={`/coin/£{item.id}`}
                        className="coin-row cursor-pointer"
                        key={item.id}
                      >
                        <td className="px-4 py-2 text-left text-white">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="inline-block h-6 w-6 mr-2"
                          />
                          <span className="table-font-size" style={{ fontWeight: 'bold' }}> {item.name}</span> <span className="table-font-size">{item.symbol}</span>
                        </td>

                        <td className="px-4 py-2 text-left text-white table-font-size">{"£ " + item.current_price.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="px-4 py-2 text-left text-white table-data-market-cap">{"£ " + item.market_cap.toLocaleString('en')}</td>
                        <td className="px-4 py-2 text-left text-white table-data-market-rank">{item.market_cap_rank}</td>
                        <td className="px-4 py-2 text-left text-white table-data-market-high-24">{"£ " + item.high_24h.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="px-4 py-2 text-left text-white table-data-market-low-24">{"£ " + item.low_24h.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className={"px-4 py-2 text-left table-data-market-change-24"}>
                          <span style={{ color: item.price_change_24h >= 0 ? '#00ff00' : '#000000' }}>
                            {"£ " + item.price_change_24h.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
