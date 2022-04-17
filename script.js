const addUser = document.getElementById("add");
const clearAll = document.getElementById("clear");
const users = document.getElementById("usersPersonalTip");
const totalTip = document.getElementById("totalTip");
let flag = 1;
let pricesArr = [];

clearAll.addEventListener("click", () => {
  users.innerHTML = "";
  pricesArr = [];
  totalCalc();
});

addUser.addEventListener("click", () => {
  users.innerHTML += `<div class="userPersonalTip">
    <span>User ${flag}</span>
        <input type="text" class="inp" required />
        <span>Price</span>
        <input type="number" class="inp" id="price-inp-${flag}" required/>
        <button class="btn" id="btn-${flag}"> confirm</button>
        <span>Personal Tip </span>
        <div class="tip" id="tip-${flag}"></div>
        </div>`;
  // console.log(users);

  let confirmBtn = document.getElementById(`btn-${flag}`);
  //console.log(confirmBtn);
  let tip = document.getElementById(`tip-${flag}`);
  //console.log(tip);
  let mealPrice = document.getElementById(`price-inp-${flag}`);
  //console.log(mealPrice);

  confirmBtn.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
      const calc = (mealPrice.value * 12) / 100;
      tip.innerHTML = calc + `  <i class="fa-solid fa-shekel-sign"></i>`;
      pricesArr.push(calc);

      //console.log(pricesArr);
      totalCalc();
    }
  });

  flag++;
});

function totalCalc() {
  let total = pricesArr.reduce((a, b) => a + b, 0);

  totalTip.innerHTML =
    `Total tip: ` + total + `  <i class="fa-solid fa-shekel-sign"></i>`;
}
