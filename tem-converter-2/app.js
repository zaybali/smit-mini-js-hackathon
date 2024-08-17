let inputField = document.querySelectorAll('.input-field')[0];
let selectInput = document.querySelectorAll('.input-temp')[0];
let selectOutput = document.querySelectorAll('.output-temp')[0];
let displayTempDiv = document.querySelectorAll('.display-temp')[0];
let errEl = document.querySelectorAll('.error')[0];

let converted;

function convert() {
  let inputTemp = parseFloat(inputField.value);
  let selectInputVal = selectInput.value;
  let selectOutputVal = selectOutput.value;

  if(isNaN(inputTemp)) {
    errEl.innerHTML = "Please Enter a Number";
    setTimeout(() => {
      errEl.innerHTML = '';
    }, 3000);
    return;
  }

  if(selectInputVal === 'celsius') {
    if(selectOutputVal === 'fahrenheit') {
      converted = inputTemp * (9/5) + 32;
    }
    else if (selectOutputVal === 'kelvin') {
      converted = inputTemp + 273.15;
    }
    else {
      converted = inputTemp;
    }
  }
  else if (selectInputVal === 'fahrenheit') {
    if (selectOutputVal === 'celsius') {
      converted = (inputTemp - 32) * 5/9;
    }
    else if (selectOutputVal === 'kelvin') {
      converted =(inputTemp - 32) * 5/9 + 273.15;
    }
    else {
      converted = inputTemp;
    }
  }
  else if (selectInputVal === 'kelvin') {
    if (selectOutputVal === 'celsius') {
      converted = inputTemp - 273.15;
    }
    else if (selectOutputVal === 'fahrenheit') {
      converted =(inputTemp - 273.15) * 9/5 + 32;
    }
    else {
      converted = inputTemp;
    }
  }

  displayTempDiv.innerHTML += `${inputTemp} ${selectInputVal} is ${converted.toFixed(2)} in ${selectOutputVal} <br>`;
}