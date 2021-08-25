// change background color of button
var startFund = document.getElementById('start-fundraiser');

startFund.onmouseover = function(){
    startFund.style.backgroundColor = "#039695";
    startFund.style.cursor = "pointer";
}

startFund.onmouseleave = function(){
    startFund.style.backgroundColor = "#01BFBD";
}

// support button 
var support = document.getElementById('support');

support.onmouseover = function(){
    support.style.cursor = "pointer";
}