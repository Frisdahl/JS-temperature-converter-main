function saveInput(input) {
  let showInput = document.getElementById("show-input");
  let showResult = document.getElementById("show-result");
  userInput = document.getElementById("number").value;
  console.log(userInput);

  const value = 273.15;
  userInput = parseFloat(userInput);

  const celChecked = document.getElementById("celciusInput").checked;
  const fahrenChecked = document.getElementById("fahrenheitInput").checked;
  const kelChecked = document.getElementById("kelvinInput").checked;

  const cel2Checked = document.getElementById("celsiusInput2").checked;
  const fahren2Checked = document.getElementById("fahrenheitInput2").checked;
  const kel2Checked = document.getElementById("kelvinInput2").checked;

  // Celcius convert
  if (celChecked && kel2Checked) {
    const result = userInput - value;
    showResult.innerHTML = result.toFixed(2) + " K"; // Update paragraph content
    showInput.innerHTML = userInput + "=";
    console.log(result);
  }

  if (celChecked && fahren2Checked) {
    const result = (userInput * 9) / 5 + 32;
    showResult.innerHTML = result.toFixed(2) + " °F"; // Update paragraph content
    showInput.innerHTML = userInput + "=";
    console.log(result);
  }

  // fahrenheit convert
  if (fahrenChecked && cel2Checked) {
    const result = ((userInput - 32) * 5) / 9;
    showResult.innerHTML = result.toFixed(2) + " °C"; // Update paragraph content
    showInput.innerHTML = userInput + "=";
    console.log(result);
  }

  if (fahrenChecked && kel2Checked) {
    const result = ((userInput - 32) * 5) / 9 + 273.15;
    showResult.innerHTML = result.toFixed(2) + " K"; // Update paragraph content
    showInput.innerHTML = userInput + "=";
    console.log(result);
  }

  // kelvin convert
  if (kelChecked && cel2Checked) {
    const result = userInput - value;
    showResult.innerHTML = result.toFixed(2) + " °C";
    console.log(result);
  }

  if (kelChecked && fahren2Checked) {
    const result = ((userInput - 273.15) * 9) / 5 + 32;
    showResult.innerHTML = result.toFixed(2) + " °F";
    console.log(result);
  }
}
