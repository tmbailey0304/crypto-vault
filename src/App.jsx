import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MarketUpdate from "./components/MarketUpdate";
import { CoinProvider } from "./components/CryptoContext";

function App() {
  return (
    <>
      <CoinProvider>
        <NavBar></NavBar>
        <Hero></Hero>
        <MarketUpdate></MarketUpdate>
      </CoinProvider>
    </>
  );
}

export default App;
