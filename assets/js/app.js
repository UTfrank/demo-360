let balance = document.getElementById("balance");
let profit = document.getElementById("profit");
let netProfit = document.getElementById("netProfit");

console.log(balance.textContent, profit, netProfit);

let balanceForm = document.getElementById("balanceForm");
let profitForm = document.getElementById("profitForm");
let netProfitForm = document.getElementById("netProfitForm");

const getBalFormVal = balanceForm.addEventListener("submit", e => {
  e.preventDefault();
  let balInput = balanceForm.balance;
  console.log(`Balance Form Value is ${balInput.value}`);
  balance.textContent = `$ ${parseFloat(balInput.value).toLocaleString('en-us')}`;
  balanceForm.reset();
  // return balInput.value;
});

const getProfitFormVal = profitForm.addEventListener("submit", e => {
  e.preventDefault();
  let profitInput = profitForm.profit;
  console.log(`Profit Form Value is ${profitInput.value}`);
  profit.textContent = `$ ${parseFloat(profitInput.value).toLocaleString('en-us')}`;
  profitForm.reset();
});

const getNetProfitFormVal = netProfitForm.addEventListener("submit", e => {
  e.preventDefault();
  let netProfitInput = netProfitForm.netProfit;
  console.log(`Net Profit Form Value is ${netProfitInput.value}`);
  netProfit.textContent = `$ ${parseFloat(netProfitInput.value).toLocaleString('en-us')}`;
  netProfitForm.reset();
});

// // getBalFormVal, getProfitFormVal, getNetProfitFormVal
// let updateBal = () => {
//   balance = `$ ${getBalFormVal}`;
// }

// let profitBal = () => profit = `$ ${getProfitFormVal}`;

// let netProfitBal = () => netProfit = `$ ${getNetProfitFormVal}`;

// // console.log(updateBal);

// // updateBal(getBalFormVal);

// // profitBal(getProfitFormVal);

// // netProfitBal(getNetProfitFormVal);