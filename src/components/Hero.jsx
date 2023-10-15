import React, { useEffect, useState } from "react";
import { useCoinContext } from "./CryptoContext";

const Hero = () => {
  const { coins, setCoins } = useCoinContext();

  const firstFourCrypto = coins.slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-black text-white">
      <div className="flex items-center justify-center">
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          className="w-10 sm:w-20 animate-bounce"
        ></img>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold sm:w-2/3 text-center">
          TRACK AND TRADE{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500">
            CRYPTO CURRENCIES
          </span>
        </h1>
        <img
          src="https://seeklogo.com/images/E/ethereum-blue-logo-8BC914153E-seeklogo.com.png"
          className="w-10 sm:w-20 animate-bounce"
        ></img>
      </div>
      <div className="mt-12 grid md:grid-cols-4 gap-8 sm:w-1/2 justify-items-center">
        {firstFourCrypto.map((crypto) => (
          <div
            className="items-center justify-center flex flex-col gap-2"
            key={crypto.id}
          >
            <img
              src={`https://coinicons-api.vercel.app/api/icon/${crypto.symbol.toLowerCase()}`}
              alt=""
              className="w-20 hover:scale-110 duration-300"
            />
            <h1 className="flex flex-row gap-2 font-semibold">
              {crypto.symbol}
              <span
                className={
                  crypto.percent_change_24h > 0
                    ? "text-green-600 font-bold"
                    : "text-red-600 font-bold"
                }
              >
                {crypto.percent_change_24h}
              </span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
