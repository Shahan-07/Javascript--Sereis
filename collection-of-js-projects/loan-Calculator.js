
function calculateLoan(){

    const loanAmountValue = document.getElementById("loan-amount") .value;
    const interestrateValue = document.getElementById("interest-rate").value;
    const monthsToPay = document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (interestrateValue * 0.01)) / monthsToPay;

    monthlyPayment = (loanAmountValue / monthsToPay + interest);

    const payment = document.getElementById("payment").innerHTML = `Monthly payment ${monthlyPayment}`;

}

