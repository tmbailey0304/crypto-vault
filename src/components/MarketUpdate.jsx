import { useState } from "react";
import { useCoinContext } from "./CryptoContext";

import { ImSpinner2 } from "react-icons/im";

const MarketUpdate = () => {
  const { coins } = useCoinContext();
  const [page, setPage] = useState(1);

  const firstFifteen = coins.slice((page - 1) * 15, page * 15);
  const totalPages = Math.ceil(coins.length / 15);

  return (
    <div className="text-white bg-black p-4 md:px-20 lg:px-40 pt-40">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">Market Update</h1>
      <div className="w-full mx-auto">
        <table className="w-full overflow-x-auto sm:text-lg">
          <thead>
            <tr className="text-left bg-gradient-to-r from-blue-600 to-pink-600 md:text-xl h-16 ">
              <th className="px-3 py-2 rounded-tl-md">Coin</th>
              <th className="px-3 py-2 text-right">Price</th>
              <th className="px-3 py-2 text-right rounded-tr-md md:rounded-none">
                24 Hour Change
              </th>
              <th className="px-3 py-2 text-right hidden md:table-cell rounded-tr-md">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.length === 0 ? (
              <ImSpinner2 className="animate-spin flex" size={50}></ImSpinner2>
            ) : (
              ""
            )}
            {firstFifteen.map((crypto) => (
              <tr
                key={crypto.id}
                className="border-b hover:bg-slate-800 duration-200"
              >
                <td className="md:px-3 py-6 flex flex-row items-center text-xl font-semibold">
                  <img
                    className="mr-2 w-10 md:w-14"
                    src={`https://coinicons-api.vercel.app/api/icon/${crypto.symbol.toLowerCase()}`}
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
                page === index + 1 ? "bg-gray-700" : "bg-gray-200 text-black"
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
