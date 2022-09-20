var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss/initial) * 100;
        lossPercentage = lossPercentage.toFixed(2);

        showOutput("Ohh! The loss is ₹"+loss+" and the loss percentage is "+lossPercentage+"%");
    }else if(current > initial){
        var profit = (current-initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        profitPercentage = profitPercentage.toFixed(2);

        showOutput("Yay The profit is ₹"+profit+" and the profit percentage is "+profitPercentage+"%");
        outputBox.style.color = "green";
    }else{
        showOutput("No Pain No Gain");
    }
}

function submitHandler(){
    if(initialPrice.value.length === 0 || stocksQuantity.value.length === 0 || currentPrice.value.length === 0){
        alert("Input values cannot be empty");
        return;
    }

    if(Number(initialPrice.value)<0 || Number(stocksQuantity.value)<0 || Number(currentPrice.value)<0){
        outputBox.style.display = "block";
        outputBox.innerText = "Enter valid input";
        return;
    } 
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(message){
    outputBox.style.display = "block";
    outputBox.innerText = message;
}


submitBtn.addEventListener("click", submitHandler);