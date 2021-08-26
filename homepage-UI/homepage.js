// change background color of button talk button
var talk  = document.getElementById('talk');

talk.onmouseover = function(){
    talk.style.backgroundColor = "#01BFBD";
    talk.style.color = "rgb(255, 255, 255)";
}

talk.onmouseleave = function(){
    talk.style.backgroundColor = "white";
    talk.style.color = "#01BFBD";
}

// change background color of button start button
var startFund = document.getElementsByClassName('start-fundraiser');

for(let i=0; i<startFund.length-1; i++){
    startFund[i].onmouseover = function(){
        startFund[i].style.backgroundColor = "#039695";
        startFund[i].style.cursor = "pointer";
    }

    startFund[i].onmouseleave = function(){
        startFund[i].style.backgroundColor = "#01BFBD";
    }
}

// support button 
var support = document.getElementById('support');

support.onmouseover = function(){
    support.style.cursor = "pointer";
}

//causes dynamic

var causes = document.getElementById('causes-img').childNodes;

for(let i=1; i<causes.length; i+=2){
    causes[i].onmouseover = function(){
        causes[i].style.cursor ="pointer";
    }
}