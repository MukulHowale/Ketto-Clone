
var para = new URLSearchParams(window.location.search);

var pass  = para.get("fundRaiser");

//data from the localstorage is appended to the page
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

 let changeDiv = document.getElementById('change');

 let about = document.getElementById('about');
 let updated = document.getElementById('updated');
 let comments = document.getElementById('comments');

 about.onclick = () =>{
  about.style.borderBottom = "3px solid #01BFBD";
  updated.style.borderBottom = "none";
  comments.style.borderBottom = "none";

  about.firstElementChild.style.color = "#01BFBD";
  updated.firstElementChild.style.color = "gray";
  comments.firstElementChild.style.color = "gray";

  let div = document.createElement('div');
  div.style.height = "1000px";
  div.style.textAlign = "center";

  let h2 = document.createElement('h2');
  h2.textContent = "About the Fundraiser";

  div.append(h2);

  changeDiv.replaceChildren(div)

 }

 

 updated.onclick = () =>{
  updated.style.borderBottom = "3px solid #01BFBD";
  comments.style.borderBottom = "none";
  about.style.borderBottom = "none";

  about.firstElementChild.style.color = "gray";
  updated.firstElementChild.style.color = "#01BFBD";
  comments.firstElementChild.style.color = "gray";

  let div = document.createElement('div');
  div.style.height = "200px";

  changeDiv.replaceChildren(div);
 }

 

 comments.onclick = () =>{
  comments.style.borderBottom = "3px solid #01BFBD";
  updated.style.borderBottom = "none";
  about.style.borderBottom = "none";

  about.firstElementChild.style.color = "gray";
  updated.firstElementChild.style.color = "gray";
  comments.firstElementChild.style.color = "#01BFBD"; 

  let div = document.createElement('div');
  div.style.height = "400px";

  changeDiv.replaceChildren(div);
 }

