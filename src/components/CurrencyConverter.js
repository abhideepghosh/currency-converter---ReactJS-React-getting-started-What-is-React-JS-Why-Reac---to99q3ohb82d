import React, { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [currencySymbols, setCurrencySymbols] = useState([]);
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
      console.log(data);
    };
  }, []);

  return (
    <div className="center">
      <h1>Currency Converter</h1>
      <select></select>
      <input type="text" id="currencyOne" className="currency1" />
      <br />
      <select></select>
      <input type="text" id="currencyTwo" className="currency2" />
    </div>
  );
}
