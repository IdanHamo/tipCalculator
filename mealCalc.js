const mealCalculator = document.getElementById("calcMeal");
const userMealItems = document.getElementById("user-meal");
//console.log(userMealItems);

mealCalculator.addEventListener("click", () => {
  userMealItems.style.display = "block";
});

const mealCalc = document.getElementById("calc");

mealCalc.addEventListener("click", () => {
  const inp1 = document.getElementById("inp-1");
  const inp2 = document.getElementById("inp-2");

  let calc = Number(inp1.value) + Number(inp2.value);
  //console.log(calc);
  inp1.value = calc;
  inp2.value = "";
});
