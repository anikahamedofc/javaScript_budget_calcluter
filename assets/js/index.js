const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", () => {
  const income = document.getElementById("income").innerText;
  const rentInput = document.getElementById("Rent");
  const foodInput = document.getElementById("Food");
  const utilitiesInput = document.getElementById("Utilities");
  const insuranceInput = document.getElementById("Insurance");
  const expensesDiv = document.getElementById("expenses");
  const balanceDiv = document.getElementById("balance");
  const errorData = document.getElementById("error-data");

  const incomeValue = parseFloat(income);
  const rentValue = parseFloat(rentInput.value);
  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);
  //   console.log(income, rentValue, foodValue, utilitiesValue, insuranceValue);
  if (
    rentValue >= 0 &&
    foodValue >= 0 &&
    utilitiesValue >= 0 &&
    insuranceValue >= 0
  ) {
    const cost = rentValue + foodValue + utilitiesValue + insuranceValue;
    const balance = incomeValue - cost;
    balanceDiv.innerText = balance;
    expensesDiv.innerText = cost;
    console.log(cost);
    errorData.innerHTML = "";
    rentInput.value = "";
    foodInput.value = "";
    utilitiesInput.value = "";
    insuranceInput.value = "";
  } else {
    errorData.innerHTML =
      '<p class="text-warning">Please Put Numbers Only To Calculate</p>';
    balanceDiv.innerText = "";
    expensesDiv.innerText = "";
  }
});
