import React, { useState, createContext, useEffect } from "react";

const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => setCoins(data.data));
  }, []);

  return (
    <CoinContext.Provider value={{ coins }}>{children}</CoinContext.Provider>
  );
};

const useCoinContext = () => {
  return React.useContext(CoinContext);
};

export { CoinProvider, useCoinContext };
