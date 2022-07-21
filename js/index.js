// Start extract DOM elements
const btn = document.getElementById(`btn`);
const label = document.getElementById(`label-input`);
const input = document.getElementById(`field`);
const labelVat = document.getElementById(`label-input-vat`);
const inputVat = document.getElementById(`field-vat`);


// Function for calculate IVA
function calculateVat(event) {
  const value1 = document.getElementById(`field`).value;
  const value2 = document.getElementById(`field-vat`).value;
  const divResults = document.getElementById(`results`);
  const resultVta = document.getElementById(`result-vta`);
  const onlyVta = document.getElementById(`only-vta`);
  const onlyPrice = document.getElementById(`only-price`);
  //Transform object to Number 
  const num = Number(value1);
  const vat = Number(value2);
  //IVA CALCULATE
  let priceWithVat = num * vat / 100;
  const result = priceWithVat + num;
  //ADD RESULT TO DOM
  resultVta.innerHTML = result;
  onlyVta.innerHTML = priceWithVat;
  onlyPrice.innerHTML = num;
}

// EVENT IN DOM ELEMENT "BUTTON"
btn.addEventListener(`click`, calculateVat);



