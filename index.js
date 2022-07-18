// Start extract DOM elements
const btn = document.getElementById("btn");
const label = document.getElementById("label-input");
const input = document.getElementById("field");
const labelIva = document.getElementById("label-input-iva");
const inputIva = document.getElementById("field-iva");
// End extract DOM elements
// Function for calculate IVA
function calculateIva() {
  const value1 = document.getElementById("field").value;
  const value2 = document.getElementById("field-iva").value;
  const paragraph = document.getElementById("result");
  //Transform object to Number 
  const num = Number(value1);
  const iva = Number(value2);
  //IVA CALCULATE
  let priceWithIva = num * iva / 100;
  const result = priceWithIva + num;
  //ADD RESULT TO DOM
  paragraph.innerHTML = result;
}
// EVENT IN DOM ELEMENT "BUTTON"
btn.addEventListener("click", calculateIva)



