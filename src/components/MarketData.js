export async function fetchMarketData(currentPage) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'x-cg-demo-api-key': 'CG-FnBqDqZvBFny9iy6fMX39Yud'
      }
    };

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=${currentPage}`, options);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}