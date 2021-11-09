import { useEffect, useState } from "react";
import styles from "./Input.module.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [userSelect, setUserSelect] = useState("BTC");

  const [usdValue, setUsdValue] = useState("1");
  const [coinValue, setCoinValue] = useState("0");

  const [coinPrice, setCoinPrice] = useState(0);

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    if (!loading) {
      const coin = coins.find(({ symbol, price }) => symbol === userSelect);
      setCoinPrice(coin.quotes.USD.price);
      if (coinPrice !== 0) {
        setCoinValue(coinPrice);
      }
    }
  }, [coinPrice, coins, loading, userSelect]);

  const changeOption = () => {
    setUsdValue(1);
    setCoinValue(coinPrice);
  };
  const reset = () => {
    setUsdValue(0);
    setCoinValue(0);
  };
  const onSelectChange = (event) => {
    setUserSelect(event.target.value);
    changeOption();
  };

  const onUSDChange = (event) => {
    let userInput = event.target.value;
    if (userInput[0] === "0" && userInput[1] !== ".") {
      userInput = userInput.slice(1);
      console.log(userInput);
    }
    setUsdValue(userInput);
    setCoinValue(usdValue / coinPrice);

    if (event.target.value === "") {
      setTimeout(() => {
        setUsdValue(0);
        setCoinValue(0);
      }, 200);
    }
  };
  const onCoinChange = (event) => {
    let userInput = event.target.value;
    if (userInput[0] === "0" && userInput[1] !== ".") {
      userInput = userInput.slice(1);
      console.log(userInput);
    }
    setCoinValue(userInput);
    setUsdValue(coinValue * coinPrice);
    if (event.target.value === "") {
      setTimeout(() => {
        setUsdValue(0);
        setCoinValue(0);
      }, 200);
    }
  };

  const onFocus = () => {
    setFocus((current) => !current);
  };
  console.log(focus);
  return (
    <div className={styles.div__container}>
      <h1 className={styles.title}>
        Crypto Coin Converter {loading ? "" : `(${coins.length})`}
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select className={styles.input} onChange={onSelectChange}>
          {coins.map((element, index) => (
            <option key={index} value={element.symbol}>
              {element.name} ({element.symbol}): {element.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div className={styles.input__div}>
        <div
          className={`${styles.input__container} ${
            focus ? styles.focus__container : null
          }`}
        >
          <input
            className={styles.input}
            onChange={onUSDChange}
            onFocus={onFocus}
            value={usdValue}
            type="text"
            placeholder="Enter USD"
          />
          <div>
            <span className={styles.input__small_text}> {usdValue} USD</span>
          </div>
        </div>

        <div className={styles.equal__box}>
          <div className={styles.equal__element}></div>
          <div className={styles.equal__element}></div>
        </div>

        <div
          className={`${styles.input__container} ${
            focus ? null : styles.focus__container
          }`}
        >
          <input
            className={styles.input}
            onChange={onCoinChange}
            onFocus={onFocus}
            value={coinValue}
            type="text"
            placeholder="Coin Price"
          />

          <div>
            <span
              className={`${styles.input__small_text} ${styles.input__result}`}
            >
              {" "}
              {coinValue} {userSelect}
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.reset} onClick={reset}>
          <span className={styles.button__text}>Reset</span>
        </div>
      </div>
    </div>
  );
}

export default App;
