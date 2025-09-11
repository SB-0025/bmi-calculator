const form = document.querySelector("form");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const result = document.querySelector("#bmiValue");
const resultdesc = document.querySelector("#bmiCategory");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightVlaue = parseInt(height.value);
  const weightValue = parseInt(weight.value);

  // check and validate

  if (heightVlaue === "" || isNaN(heightVlaue) || heightVlaue < 0) {
    result.innerHTML = `<span style="color:red"> Enter Valid Height! </span>`;
    resultdesc.innerHTML = " "

  } else if (weightValue === "" || isNaN(weightValue) || weightValue < 0) {
    result.innerHTML = `<span style="color:red"> Enter Valid Weight! </span>`;
    resultdesc.innerHTML = " "

  } else {
    const bmiVlaue = (
      weightValue /
      ((heightVlaue * heightVlaue) / 10000)
    ).toFixed(2);

    if (bmiVlaue < 18.5) {

      result.innerHTML = `<span>${bmiVlaue}</span>`;
      resultdesc.innerHTML = ` <em style="color:#18b4f2">Underweight</em> `;

    } else if (bmiVlaue >= 18.5 && bmiVlaue <= 24.9) {

      result.innerHTML = `<span>${bmiVlaue}</span> `;
      resultdesc.innerHTML = ` <em style="color:#27f218">Normal</em>  `;

    } else if (bmiVlaue >= 25.0 && bmiVlaue <= 29.9) {

      result.innerHTML = `<span>${bmiVlaue}</span> `;
      resultdesc.innerHTML = `  <em style="color:#f29b18">Overweight</em>`;

    } else {

      result.innerHTML = `<span>${bmiVlaue}</span>`;
      resultdesc.innerHTML = `<em style="color:#f22e18">Obese</em> `;

    }
  }
});
