const BASE_URL = 'https://api.exchangerate.host';
const LATEST_ENDPOINT = '/latest';

const buildLatestExchangeUrl = (curency) => {
  return `${BASE_URL}${LATEST_ENDPOINT}?base=${curency}`;
};

const fetchExchangeRates = async (currency) => {
  const url = buildLatestExchangeUrl(currency);

  try {
    const response = await fetch(url);
    const json = await response.json();
    const exchangeRates = {
      rates: json.rates,
      base: json.base
    };
    return exchangeRates;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

