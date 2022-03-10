const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
// console.log(celsiusInput);
// console.log(fahrenheitInput);

// celsius to fahrenheit
celsiusInput.addEventListener("input", () => {
    let output = (parseFloat(celsiusInput.value) * 9 / 5) + 32;
    // console.log(celsiusInput.value);
    // console.log(output);
    fahrenheitInput.value = parseFloat(output.toFixed(2));
    // console.log(fahrenheitInput.value);
});

// fahernheit to celsius
fahrenheitInput.addEventListener("input", () => {
    let output = (parseFloat(fahrenheitInput.value) - 32) * 5 / 9;
    celsiusInput.value = parseFloat(output.toFixed(2));
    // console.log(output);
    // console.log(celsiusInput.value);
})