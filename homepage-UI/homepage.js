// change background color of button talk button
var talk  = document.getElementsByClassName('talk');

for(let val of talk){
    val.onmouseover = function(){
        val.style.backgroundColor = "#01BFBD";
        val.style.color = "rgb(255, 255, 255)";
        val.style.cursor = "pointer";
    }
    
    val.onmouseleave = function(){
        val.style.backgroundColor = "white";
        val.style.color = "#01BFBD";
    }
}

// change background color of button start button
var startFund = document.getElementsByClassName('start-fundraiser');

for(let i=0; i<startFund.length; i++){
    if(i != 2 && i != 4){
        startFund[i].onmouseover = function(){
            startFund[i].style.backgroundColor = "#039695";
            startFund[i].style.cursor = "pointer";
        }
    
        startFund[i].onmouseleave = function(){
            startFund[i].style.backgroundColor = "#01BFBD";
        }
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

//success stories dynamic
var successCar = document.getElementById("successCarousel");

var success =
[
    {
        image : "https://kettocdn.gumlet.io/media/banner/0/79/image/d0ab9b0b9bcc30ced6574c54d6b216ab895f90d5.jpg?w=auto&dpr=1.3",
        h2 : "Amit and the world’s toughest cycling expedition",
        p : "At 38, Dr. Amit Samarth is the first Asian to qualify, contest and complete the Trans-Siberian Extreme Endurance Race. It is the world's longest and the toughest cycling race - starting from Moscow, traversing 9100 kms through Russia, to finally end in Vladivostok. Amit was one of the only six people who finished...",
    },

    {
        image : "https://kettocdn.gumlet.io/media/banner/0/77/image/711a52ae35af5cf1c2dba2f5366a057eb2eb1ce9.png?w=auto&dpr=1.3",
        h2 : "How Chennai Children’s Choir Fulfilled Their Dream",
        p : "The Chennai Children's Choir comprises of visually impaired and special needs kids who beautifully express themselves through singing. In June 2018, they were presented with an opportunity to partake in the Serenade Choral Festival in USA. Touched by their crowdfunding campaign, 423 supporters from all over the world donated Rs 35,95,600 so these beautiful souls could get an opportunity to serenade a live audience...",
    },

    {
        image : "https://kettocdn.gumlet.io/media/banner/0/76/image/55647fe671a752a73be973498bcdee98a0fc797e.jpg?w=auto&dpr=1.3",
        h2 : "How 6 year old Viraat overcame Cerebral Palsy",
        p : "Viraat was diagnosed with Cerebral Palsy since birth. His parents started a fundraiser on Ketto to manage his therapy expenses as it is a prolonged and expensive procedure. Little did they know that their fundraiser would get such a tremendous response. With the help of your timely contributions, 6-year old Viraat...",
    }
]

var ind = 0;

var leftS = document.getElementById("leftSuccess");

leftS.onclick = function(){
    if(ind === 2){
        ind = 0;
    }
    else{
        ind++;
    }
    card.remove();
    car(ind);
}

var rightS = document.getElementById("rightSuccess");
rightS.onclick = function(){
    if(ind === 0){
        ind = 2;
    }
    else{
        ind--;
    }
    card.remove();
    car(ind);
}

function car(i){
    var card = document.createElement("div");
    card.setAttribute('id','card');
    
    var img = document.createElement("img");
    img.src = success[i].image;
    img.style.borderRadius = "5px";
    img.style.float = "left";
    
    var divInfo = document.createElement("div");
    divInfo.setAttribute('id', 'divInfo');
    
    var H2 = document.createElement('h2');
    H2.textContent = success[i].h2;
    H2.style.marginTop = "20px";
    H2.style.marginBottom ="20px";
    H2.style.fontSize ="20px";
    H2.setAttribute('class','font-style');
    H2.setAttribute('class','font-color_1');
    
    var P = document.createElement('p');
    P.textContent = success[i].p;
    P.style.fontSize = "17px";
    P.style.lineHeight = "27px";
    P.style.marginBottom = "50px";
    P.setAttribute('class','font-style');
    P.setAttribute('class','font-color_1');
    
    var divA = document.createElement('div');
    divA.style.width = "100%";
    divA.style.height ="10px";
    
    var A = document.createElement('a');
    A.textContent = "Read More";
    A.setAttribute('class','green-color-text-2')
    
    divA.appendChild(A);
    
    divInfo.append(H2,P, divA);
    
    card.append(img, divInfo);
    
    successCar.append(card);
}

car(ind);


