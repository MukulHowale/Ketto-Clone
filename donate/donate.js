
var para = new URLSearchParams(window.location.search);

var pass  = para.get("fundRaiser");


window.onload = function(){
  let MyfundraiserObjects  = JSON.parse(localStorage.getItem("fund_raisers"));

  MyfundraiserObjects.forEach(function(object){
    
    if(object.fundraiser==pass){
      document.getElementById("imgDonate").setAttribute('src',object.image);
      document.getElementById("profilephoto").setAttribute('src',object.userImage);
      document.getElementById("benefitorphoto").setAttribute('src',object.userImage);
      document.getElementById("usericon").setAttribute("src",object.userImage);

      let amount = object.raised;
     
      //formatiing into indian rs , with  commmas.
     document.getElementById("amount").innerHTML = amount.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
       }); 
     
      document.getElementById("campaigner").innerText = object.fundraiser;
      document.getElementById("supporters").innerText = object.supporters;
      document.getElementById("daysLeft").innerText = object.daysLeft;
      document.getElementById("benifiting").innerText = object.patient;
      document.getElementById("upperDonate").innerText = object.title;
    }
  });
}


 function makePayment(){

   var newpara = new URLSearchParams();
   newpara.append("fundRaiser",pass);
   location.href = "donatefund.html?" + newpara.toString();

 }