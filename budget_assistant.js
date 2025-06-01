// Step 1: Create and Initialize Variables
let startupName = "North South Charters";
let initialCapital = 35000;
let monthlyRevenue = 6000;
let monthlyExpenses = 3500;

// Step 2: Calculate Business Metrics
let netCashFlow = monthlyRevenue - monthlyExpenses;
let currentBalance = initialCapital + netCashFlow;
let isProfitable = netCashFlow > 0;

// Step 3: Print to Console
console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + (isProfitable ? "True" : "False"));

// ✅ Step 3B: Also Output to Web Page
document.body.innerHTML += `<h2>${startupName}</h2>`;
document.body.innerHTML += `<p><strong>Net Monthly Cash Flow: $${netCashFlow}</p>`;
document.body.innerHTML += `<p><strong>Current Balance: $${currentBalance}</p>`;
document.body.innerHTML += `<p><strong>Profitability Status: ${isProfitable ? "True" : "False"}</p>`;