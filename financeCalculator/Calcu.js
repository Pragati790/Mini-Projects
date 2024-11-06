let paymentChart;  // To store the chart instance

function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// EMI Calculator
function calculateEMI() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let loanTenure = parseFloat(document.getElementById("loanTenure").value);
    
    // Monthly interest rate
    let monthlyInterestRate = interestRate / (12 * 100);
    // Number of months
    let numberOfMonths = loanTenure * 12;
    
    // Calculate EMI using the standard formula
    let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
              (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    // Round off the result and display it
    emi = emi.toFixed(2);
    document.getElementById("emiAmount").innerText = emi;

    // Calculate total payment and interest
    let totalPayment = (emi * numberOfMonths).toFixed(2);
    let totalInterest = (totalPayment - loanAmount).toFixed(2);

    // Update the Pie Chart with Loan and Interest proportions
    updatePaymentChart(loanAmount, totalInterest);
}

// Function to update the Pie Chart
function updatePaymentChart(loanAmount, totalInterest) {
    const ctx = document.getElementById('paymentChart').getContext('2d');

    if (paymentChart) {
        paymentChart.destroy();  // Destroy the previous chart if it exists
    }

    paymentChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Principal (Loan Amount)', 'Total Interest'],
            datasets: [{
                label: 'Payment Breakdown',
                data: [loanAmount, totalInterest],
                backgroundColor: ['#4caf50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

// Simple Interest Calculator
function calculateSimpleInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);

    let simpleInterest = (principal * rate * time) / 100;
    simpleInterest = simpleInterest.toFixed(2);

    document.getElementById("siAmount").innerText = simpleInterest;
}

// Compound Interest Calculator
function calculateCompoundInterest() {
    let principal = parseFloat(document.getElementById("cPrincipal").value);
    let rate = parseFloat(document.getElementById("cRate").value) / 100;
    let time = parseFloat(document.getElementById("cTime").value);
    let frequency = parseInt(document.getElementById("frequency").value);

    let compoundInterest = principal * Math.pow((1 + rate / frequency), frequency * time) - principal;
    compoundInterest = compoundInterest.toFixed(2);

    document.getElementById("ciAmount").innerText = compoundInterest;
}
