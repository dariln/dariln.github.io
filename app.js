// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // UI

  var UIamount = parseFloat(document.getElementById("amount").value).toFixed(0);
  var UIinterest = document.getElementById("interest").value;
  var date1 = new Date(document.getElementById("issue").value);
  var date2 = new Date(document.getElementById("current").value);
  var diffTime = Math.abs(date2 - date1);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))+1;
  var interest = parseFloat((diffDays * UIamount * UIinterest )/36000).toFixed(0);
  var totalAmount = parseFloat(UIamount)+parseFloat(interest);

  console.log(diffDays + " days");

  document.getElementById("monthlyPayment").innerHTML = diffDays;
  document.getElementById("totalInterest").innerHTML = "₹" + interest;
  document.getElementById("totalPayment").innerHTML = "₹" + totalAmount;
  // Calculate
  e.preventDefault();
}
