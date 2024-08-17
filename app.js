
let tempInputEl = document.querySelectorAll('.temp-val-input')[0];
let inputConEl = document.querySelectorAll('.input-con')[0];
let outputConEl = document.querySelectorAll('.output-con')[0];
let tempDiv = document.querySelector('.temp-div');
let errorDiv = document.querySelector('.error');



function convert() {
  let inputVal = parseFloat(tempInputEl.value);
  let inputConverter = inputConEl.value;
  let outputConverter =  outputConEl.value;

  if(isNaN(inputVal)) {
    errorDiv.innerHTML = "Please enter a number";
    errorDiv.className +=" alert-danger"
    setTimeout(()=>{
      errorDiv.innerHTML = "";
      errorDiv.className = "";
    }, 3000)
    return;
  }

  console.log(inputConverter, outputConverter)
  if(inputConverter === "Select unit" || outputConverter === "Convert to") {
    errorDiv.innerHTML = "Please select both units for conversion!";
    errorDiv.className +=" error text-center mb-3 alert alert-danger";
    setTimeout(()=>{
      errorDiv.innerHTML = "";
      errorDiv.className = "";
    }, 3000)
    return;
  }
  errorDiv.innerHTML = "";

  let convertedVal;

  if(inputConverter === "celsius") {
    if(outputConverter === "fahrenheit") {
      convertedVal = (inputVal * 9/5) + 32;
    }
    else if(outputConverter === "kelvin") {
      convertedVal = inputVal + 273.15;
    }
    else {
      convertedVal = inputVal;
    }
  }
  else if(inputConverter === "fahrenheit") {
    if(outputConverter === "celsius") {
      convertedVal = (inputVal - 32) * 5/9;
    }
    else if(outputConverter === "kelvin") {
      convertedVal = ((inputVal - 32) * 5/9) + 273.15;
    }
    else {
      convertedVal = inputVal;
    }
  }
  else if(inputConverter === "kelvin") {
    if(outputConverter === "celsius") {
      convertedVal = inputVal - 273.15;
    }
    else if(outputConverter === "fahrenheit") {
      convertedVal = ((inputVal - 273.15) * 9/5) + 32;
    }
    else {
      convertedVal = inputVal;
    }
  }

  tempDiv.innerHTML += `${inputVal} ${inputConverter} is ${convertedVal.toFixed(2)} in ${outputConverter}<br>`;
  console.log(convertedVal);
  }
