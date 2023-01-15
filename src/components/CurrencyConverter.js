import React, { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [currencySymbols, setCurrencySymbols] = useState([]);
  const [selectorOne, setSelectorOne] = useState("USD");
  const [selectorTwo, setSelectorTwo] = useState("INR");
  useEffect(() => {
    const getSymbols = async () => {
      // Define Headers
      let myHeaders = new Headers();
      myHeaders.append("apikey", "dznzx2HwMzCohBpZq2JXpPyldLRWUT5L");
      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders
      };
      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/symbols",
        requestOptions
      );
      const data = await response.json();
      // console.log(Object.keys(data.symbols));
      setCurrencySymbols(Object.keys(data.symbols));
    };
    getSymbols();
  }, []);

  const convertCurrency = async (to, from, amount) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "dznzx2HwMzCohBpZq2JXpPyldLRWUT5L");
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders
    };
    const response = await fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  const handleSelectorOne = (e) => {
    setSelectorOne(e.target.value);
  };
  const handleSelectorTwo = (e) => {
    setSelectorTwo(e.target.value);
  };

  return (
    <div className="center">
      <h1>Currency Converter</h1>
      <select value={selectorOne} onChange={handleSelectorOne}>
        {currencySymbols.map((element, i) => {
          return (
            <option key={i} value={element}>
              {element}
            </option>
          );
        })}
        {/* <option value="volvo">Volvo</option> */}
      </select>

      <input type="text" id="currencyOne" className="currency1" />
      <br />
      <select value={selectorTwo} onChange={handleSelectorTwo}>
        {currencySymbols.map((element, i) => {
          return (
            <option key={i} value={element}>
              {element}
            </option>
          );
        })}
        {/* <option value="volvo">Volvo</option> */}
      </select>
      <input type="text" id="currencyTwo" className="currency2" />
    </div>
  );
}
