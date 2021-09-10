
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
  div.style.height = "300px";
  div.setAttribute('class','padding aboutDiv')

  let h2 = document.createElement('h2');
  h2.textContent = "About the Fundraiser";
  h2.setAttribute('class','font-family font-color-1');

  let p = document.createElement('p');
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae maximus nunc. Aenean eget congue turpis. Nullam eleifend scelerisque metus, vel eleifend tellus. Curabitur sed metus erat. Ut ac odio ut sapien ullamcorper vestibulum ut eget felis. Phasellus urna ipsum, porta id lectus et, interdum tincidunt dui. Ut eu metus consequat, tincidunt nisi eget, semper lorem. Fusce eu turpis eu turpis luctus gravida. Pellentesque nec magna purus. Duis non molestie urna, at volutpat sapien. Aenean vel pellentesque ipsum, in egestas mauris. Donec vitae lectus ornare, vehicula dui quis, imperdiet arcu. Aliquam blandit tellus ut nisi porta tempor. Nullam nec velit eu magna elementum pharetra porttitor sit amet libero. Nullam eu nisl turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
  p.setAttribute('class','font-family font-size font-color-1')
  p.style.textAlign = "left";

  div.append(h2,p);

  changeDiv.replaceChildren(div);

 }

 

 updated.onclick = () =>{
  updated.style.borderBottom = "3px solid #01BFBD";
  comments.style.borderBottom = "none";
  about.style.borderBottom = "none";

  about.firstElementChild.style.color = "gray";
  updated.firstElementChild.style.color = "#01BFBD";
  comments.firstElementChild.style.color = "gray";

  let div = document.createElement('div');
  div.style.height = "100px";
  div.setAttribute('class','padding aboutDiv')

  let innerDiv = document.createElement('div');
  innerDiv.style.width = "580px"
  innerDiv.style.height = "50px";
  innerDiv.style.backgroundColor = "#f5f5f5";
  innerDiv.style.borderRadius = "10px";
  innerDiv.style.padding = "20px";
  innerDiv.style.display = "flex";
  innerDiv.style.gap = "20px";

  let pDiv = document.createElement('div');
  let btn = document.createElement('button');

  let f = document.getElementById('campaigner').innerText;

  pDiv.style.width = "400px";
  pDiv.innerText = `Feel free to ask ${f} for a new update on this Fundraiser.`;
  pDiv.setAttribute('class','font-family font-color-1');

  btn.style.width = "200px"
  btn.style.height = "50px"
  btn.innerText = "Ask For Update";
  btn.style.backgroundColor = "white";
  btn.style.boxShadow = "0 6px 40px 0 rgb(0 0 0 / 10%)";
  btn.style.border = "none";
  btn.style.lineHeight = "normal";
  btn.setAttribute('class','font-family font-color-2 font-weight-2')
  btn.onmouseover = () =>{
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#f5f5f5";
  }
  btn.onmouseleave = () =>{
    btn.style.backgroundColor = "white";
  }

  innerDiv.append(pDiv,btn);

  div.append(innerDiv);

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

