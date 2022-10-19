const clearCurrencyInput = () => {
  const currencyInputElement = document.querySelector('#currency-input'); 
  currencyInputElement.value = '';
};

const clearList = () => {
  const currencyList = document.getElementById('currency-list');
  currencyList.innerHTML = '';
}

const renderBaseCurrencyTitle = (base) => {
  const baseTitle = document.getElementById('title-base');
  baseTitle.innerHTML = `Valores referentes a: 1 ${base}`;
};

const renderRateItemList = (currency, value) => {
  const currencyList = document.getElementById('currency-list');
  const fixedValue = value.toFixed(2);
  const li = document.createElement('li');
  li.innerHTML = `<strong>${currency}:</strong> ${fixedValue}`;
  currencyList.appendChild(li);
};

const renderRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([ currency, value ]) => {
    renderRateItemList(currency, value);
  });
};

const handleSearchEvent = async () => {
  const currencyElement = document.querySelector('#currency-input');
  const currencyValue = currencyElement.value;

  if (currencyValue === '') {
    alert('Preencha o campo de pesquisa!');
    return;
  }

  const object = await fetchExchangeRates(currencyValue);
  clearList();
  renderRates(object.rates);
  renderBaseCurrencyTitle(object.base);
  clearCurrencyInput();
};

const setupHtmlElements = () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchEvent);
};

window.onload = () => {
  setupHtmlElements();
};