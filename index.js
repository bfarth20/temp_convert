//let temperatureFahrenheit = 70;
//let convertToCelsius = (temperatureFahrenheit - 32) * (5 / 9);
//console.log(convertToCelsius);

function describeTemperature(temperatureFahrenheit) {
  let convertToCelsius = (temperatureFahrenheit - 32) * (5 / 9);
  if (convertToCelsius < 0) {
    let description = "very cold";
    alert(
      `${temperatureFahrenheit} fahrenheit is ${convertToCelsius} in celsius and would feel ${description}`
    );
  } else if (convertToCelsius < 20) {
    let description = "cold";
    alert(
      `${temperatureFahrenheit} fahrenheit is ${convertToCelsius} in celsius and would feel ${description}`
    );
  } else if (convertToCelsius < 30) {
    let description = "warm";
    alert(
      `${temperatureFahrenheit} fahrenheit is ${convertToCelsius} in celsius and would feel ${description}`
    );
  } else if (convertToCelsius < 40) {
    let description = "hot";
    alert(
      `${temperatureFahrenheit} fahrenheit is ${convertToCelsius} in celsius and would feel ${description}`
    );
  } else if (convertToCelsius >= 40) {
    let description = "very hot";
    alert(
      `${temperatureFahrenheit} fahrenheit is ${convertToCelsius} in celsius and would feel ${description}`
    );
  }
}
let temperatureFahrenheit = prompt(
  "Please enter your temperature in Fahrenheit.",
  "temperature"
);
let description = describeTemperature(temperatureFahrenheit);
