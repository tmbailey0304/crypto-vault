import React, { useEffect, useState } from "react";
import { useCoinContext } from "./CryptoContext";

const MarketUpdate = () => {
  const { coins } = useCoinContext();
  const [page, setPage] = useState(1);

  const firstFifteen = coins.slice((page - 1) * 15, page * 15);
  const totalPages = Math.ceil(coins.length / 15);

  return (
    <div className="text-white bg-black p-4 md:px-40">
      <h1 className="text-center text-2xl font-bold mb-4">Market Update</h1>
      <div className="w-full mx-auto">
        <table className="w-full overflow-x-auto">
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Coin</th>
              <th className="px-3 py-2 text-right">Price</th>
              <th className="px-3 py-2 text-right">24 Hour Change</th>
              <th className="px-3 py-2 text-right hidden md:table-cell">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {firstFifteen.map((crypto) => (
              <tr key={crypto.id} className="border-t">
                <td className="px-3 py-2 flex flex-row items-center">
                  <img
                    className="mr-2"
                    src={`https://coinicons-api.vercel.app/api/icon/${crypto.symbol.toLowerCase()}`}
                    width={30}
                  ></img>
                  {crypto.name}
                </td>
                <td className="px-3 py-2 text-right">
                  $
                  {parseFloat(crypto.price_usd).toFixed(
                    crypto.price_usd > 0.1 ? 2 : 6
                  )}
                </td>
                <td className="px-3 py-2 text-right">
                  <span
                    className={
                      crypto.percent_change_24h > 0
                        ? "text-green-500"
                        : "text-red-600"
                    }
                  >
                    {crypto.percent_change_24h} %
                  </span>
                </td>
                <td className="hidden md:table-cell px-3 py-2 text-right">
                  ${parseFloat(crypto.market_cap_usd).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-4 py-2 mx-1 ${
                page === index + 1 ? "bg-gray-700" : "bg-gray-200"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketUpdate;
