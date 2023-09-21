// Get elements from the DOM
const celsiusInput = document.getElementById('celsius');
const convertBtn = document.getElementById('convertBtn');
const fahrenheitResult = document.getElementById('fahrenheitResult');

// Function to convert Celsius to Fahrenheit
function convertToCelsius() {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitResult.textContent = fahrenheitValue.toFixed(2);
    } else {
        fahrenheitResult.textContent = '---';
    }
}

// Add event listener to the Convert button
convertBtn.addEventListener('click', convertToCelsius);
