var fund = [
    
   {
    title : "#UnlockEducation - Help India's International Students",
    image : "https://kettocdn.gumlet.io/media/campaign/481000/481515/image/wid61093b946f602.jpeg?w=300&dpr=1.3",
    userImage : "https://kettocdn.gumlet.io/media/ngo/171000/171425/image/131ed9ac2265a61c08b060a769087b6f1b47acdc.png?w=50&dpr=1.3",
    fundraiser : "SANMAT",
    daysLeft : 5,
    supporters : 17,
    category : "Education",
    raised : 232330,
    goal :  300000
   },
   
   {
    title : "Schooling Special Needs Children With Custom Education",
    image : "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/wid5fa2de60a1557.jpeg?w=300&dpr=1.3",
    userImage : "https://kettocdn.gumlet.io/media/ngo/2169000/2169187/image/607ea638e3612.jpg?w=50&dpr=1.3",
    fundraiser : "Nithilyam",
    daysLeft : 4,
    supporters : 1904,
    category : "Education",
    raised : 16800,
    goal :  300000
   },
   
   {
    title : "My 2.5year Kid Lost His Dad. Help Me To Payoff And In His Education And Upbringing.",
    image : "https://kettocdn.gumlet.io/media/campaign/424000/424034/image/wid60b476cd93ce2.jpeg?w=300&dpr=1.3",
    userImage : " ",
    fundraiser : "Vartika Agarwal",
    daysLeft : 6,
    supporters : 241,
    category : "Education",
    raised : 2345650,
    goal :  10000000
   },

   {
      title : " BACK TO SCHOOL",
      image : "https://kettocdn.gumlet.io/media/campaign/445000/445343/image/wid60f6ea7fc6789.jpeg?w=300&dpr=1.3",
      userImage : "https://kettocdn.gumlet.io/media/ngo/4244000/4244769/image/e745dbfec86a60c512fd3ee1348e29bf85b132a3.jpg?w=50&dpr=1.3",
      fundraiser : "Vidya Bhawan Society",
      daysLeft : 47,
      supporters : 157,
      category : "Education",
      raised : 1167650,
      goal :  15000000
     },
     
     {
      title : "Rebuilding 1500 Children’s Lives With Life Skills Education",
      image : "https://kettocdn.gumlet.io/media/campaign/265000/265751/image/wid23be670883cbe43f3e2a5c74edb8c7f9403feaca.jpg?w=300&dpr=1.3",
      userImage : "https://kettocdn.gumlet.io/media/ngo/97000/97237/image/deba88f96642896d7f22a837f59210436a57eb41.jpg?w=50&dpr=1.3",
      fundraiser : "Enabling Leadership",
      daysLeft : 27,
      supporters : 47,
      category : "Education",
      raised : 1043650,
      goal :  5000000
     },
     
     {
      title : "'Gift A Brick' To Build An Inclusive School In Karjat",
      image : "https://kettocdn.gumlet.io/media/campaign/240000/240053/image/wid5f50d4ea5fa9a.jpeg?w=300&dpr=1.3",
      userImage : "https://kettocdn.gumlet.io/media/ngo/1067000/1067364/image/a825f32d0e5cc529fca197c9866f92d5f1b0eaf6.JPG?w=50&dpr=1.3",
      fundraiser : "Samaaveshi Pathshaala Foundation",
      daysLeft : 34,
      supporters : 135,
      category : "Education",
      raised : 673344,
      goal :  1000000
     },
]
var glb = document.getElementById('glb');

var grb = document.getElementById('grb');

var p1 = 0;

var p2 = 1;

var p3 = 2;

function p(i1,i2,i3){
   var temp = [];
   temp.push(fund[i1]);
   temp.push(fund[i2]);
   temp.push(fund[i3]);
   return temp;
}

pass(p(p1,p2,p3));

glb.onclick = function(){
   var cv = document.getElementById('cV');
   while(cv.firstChild){
      cv.removeChild(cv.firstChild);
   }

   if(p3 == 5){
      p3 = -1;
   }
   if(p2 == 5){
      p2 = -1;
   }
   if(p1 == 5){
      p1 = -1;
   }

   p1++;
   p2++;
   p3++;

   pass(p(p1,p2,p3));
}

grb.onclick = function(){
   var cv = document.getElementById('cV');
   while(cv.firstChild){
      cv.removeChild(cv.firstChild);
   }

   p1--;
   p2--;
   p3--;

   if(p3 == -1){
      p3 = 5;
   }
   if(p2 == -1){
      p2 = 5;
   }
   if(p1 == -1){
      p1 = 5;
   }

   pass(p(p1,p2,p3));
}

function pass(arr){
   for(let val of arr){
      let imageTag = document.createElement('img');
      imageTag.src = val.image;
  
      let titleTag = document.createElement('p');
      titleTag.setAttribute('id','titleText');
      titleTag.innerText = val.title;
      
      let userLogo = document.createElement('img');
      userLogo.src = val.userImage;
      userLogo.alt = "";
      userLogo.style.borderRadius = "50%";
      userLogo.style.width = "30px"
      userLogo.style.height = "30px";
      userLogo.style.marginLeft ="16px";
      userLogo.style.marginBottom = "10px";
       
      
      let raiser = document.createElement('p');
      raiser.setAttribute('id','raiserText');
      raiser.innerText = "by " + val.fundraiser;
  
  
      let raisedFund = document.createElement('p');
      raisedFund.setAttribute('id','raisedFund');
      var number = val.raised;
      raisedFund.innerHTML  = number.toLocaleString('en-IN', {
         maximumFractionDigits: 2,
         style: 'currency',
         currency: 'INR'
     });
     
  
     let progress_Bar = document.createElement('div');
     progress_Bar.setAttribute('id','progressBar');
   
     let progress_done = document.createElement('div');
     progress_done.setAttribute('id','progressDone');
     
    let widthPercentage = (val.raised/val.goal)*100;
    let progressWidth = widthPercentage.toString() + "%";
    progress_done.style.width = progressWidth;
  
    progress_Bar.append(progress_done);
  
     let textraised = document.createElement('p');
     textraised.setAttribute('id',"txtraised");
     textraised.innerText = "raised";
  
  
     let daysTag = document.createElement('p');
     daysTag.innerText = val.daysLeft;
     daysTag.setAttribute('id','days');
      
     let text1 = document.createElement('p');
     text1.innerText = "Days Left";
     text1.setAttribute('id','txt1');
  
  
     let supportTag = document.createElement('p');
     supportTag.innerText = val.supporters;
     supportTag.setAttribute('id','supporters');
  
     let text2 = document.createElement('p');
     text2.innerText = "Supporters";
     text2.setAttribute('id','txt2');
  
      let innerDiv = document.createElement('a');
      innerDiv.setAttribute('id','innerDiv');
      innerDiv.style.textDecoration = "none";
      innerDiv.href = "#";
      innerDiv.style.color = "inherit";
  
      innerDiv.append(imageTag,titleTag,userLogo,raiser,raisedFund,textraised,progress_Bar,daysTag,text1,supportTag,text2);
  
       document.getElementById('cV').append(innerDiv);
   }
}

var inDiv = document.getElementById('innerDiv');

inDiv.onclick = function(){
   window.location.href = "";
}