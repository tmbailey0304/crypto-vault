import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MarketUpdate from "./components/MarketUpdate";
import { CoinProvider } from "./components/CryptoContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CoinProvider>
        <NavBar></NavBar>
        <Hero></Hero>
        <MarketUpdate></MarketUpdate>
        <Footer></Footer>
      </CoinProvider>
    </>
  );
}

export default App;
