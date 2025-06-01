// Step 1: Create and Initialize Variables
const startupName = "North South Charters";
const initialCapital = 35000;
let monthlyRevenue = 6000;
let monthlyExpenses = 3500;

// Step 2: Calculate Business Metrics
const netCashFlow = monthlyRevenue - monthlyExpenses;
const currentBalance = initialCapital + netCashFlow;
const isProfitable = netCashFlow > 0;

// Step 3: Print to Console
console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + (isProfitable ? "True" : "False"));

// ✅ Step 3B: Also Output to Web Page
document.body.innerHTML += `<h2>${startupName}</h2>`;
document.body.innerHTML += `<p><strong>Net Monthly Cash Flow:</strong> $${netCashFlow}</p>`;
document.body.innerHTML += `<p><strong>Current Balance:</strong> $${currentBalance}</p>`;
document.body.innerHTML += `<p><strong>Profitability Status:</strong> ${isProfitable ? "True" : "False"}</p>`;