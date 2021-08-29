
var para = new URLSearchParams(window.location.search);

var pass  = para.get("fundRaiser");


window.onload = function(){
  let MyfundraiserObjects  = JSON.parse(localStorage.getItem("fund_raisers"));

  MyfundraiserObjects.forEach(function(object){
    
    if(object.fundraiser==pass){
      document.getElementById("imgDonate").setAttribute('src',object.image);
      let amount = object.raised;
     
      //formatiing into indian rs , with  commmas.
     document.getElementById("amount").innerHTML = amount.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
       }); 
     
      document.getElementById("supporters").innerText = object.supporters;
      document.getElementById("daysLeft").innerText = object.daysLeft;
    }
  });
}

// about, update and comment section
var change = document.getElementById('change');

var about = document.getElementById('aboutBtn');

var update = document.getElementById('updateBtn');

var comment = document.getElementById('commentsBtn');

// globe icon
var globe = document.getElementById('globe');

// onclick of about button
about.onclick = function(){
  globe.style.color = "#01BFBD";

  about.style.borderBottom = "2px solid #01BFBD";

  var aSect = document.createElement('div');
  aSect.setAttribute('id','aSect');

  let h2 = document.createElement('h2');
  h2.textContent = "About the Fundraiser";
  h2.style.color = "#444444";
  h2.style.textAlign = "center";
  h2.style.marginBottom = "20px";

  let p1 = document.createElement('p');
  p1.textContent = "*Ketto is not charging any fee on this fundraiser*";
  p1.style.backgroundColor = "#FFC000";
  p1.style.width = "350px";

  let p2 = document.createElement('p');
  p2.textContent = "";

  aSect.append(h2,p1);

  change.appendChild(aSect);

}