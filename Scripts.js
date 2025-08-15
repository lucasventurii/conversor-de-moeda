const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.4;
const euro = 6.3;
const bitcoin = 0.0000016;

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  } else if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  } else if (select.value === "Bitcoin") {
    const formattedBitcoin = (inputReais * bitcoin).toFixed(8);
    currencyValueText.innerHTML = `BTC ${formattedBitcoin}`;
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./img/usa.svg";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./img/euro.svg";
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "BTC";
    currencyImg.src = "./img/btc.svg";
  }

  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
