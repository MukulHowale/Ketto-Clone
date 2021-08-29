
var para = new URLSearchParams(window.location.search); //search the parameter sent using URL
var pass  = para.get("fundRaiser"); //getting the value of parameter by key 

window.onload = function(){
  let MyfundraiserObjects  = JSON.parse(localStorage.getItem("fund_raisers"));

  MyfundraiserObjects.forEach(function(object){
    
    if(object.fundraiser==pass){

     document.getElementById("upperDonate").innerText = object.title;
     
      document.getElementById("imgDonate").setAttribute('src',object.image);
      let amount = object.raised;
     
      //formatiing into indian rs , with  commmas.
     document.getElementById("amount").innerHTML = amount.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
       }); 
      document.getElementById('usericon').setAttribute('src',object.userImage);
      document.getElementById("supporters").innerText = object.supporters;
      document.getElementById("daysLeft").innerText = object.daysLeft;
    }
  });
}
 