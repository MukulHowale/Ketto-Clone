
var fund_raisers = [

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
    title : "Support My Antarctic Expedition In March 2022 On Climate Leadership And Awareness Generation",
    image : "https://kettocdn.gumlet.io/media/campaign/336000/336158/image/wid603b9671b751d.jpeg?w=300&dpr=1.3",
    userImage : "https://kettocdn.gumlet.io/media/individual/259000/259965/image/6107fd80ac33f.jpg?w=50&dpr=1.3",
    fundraiser : "Rana Pujari",
    daysLeft : 8,
    supporters : 194,
    category : "Environment",
    raised : 23844,
    goal :  300000
   },
   {
    title : "Support Us In Planting 2,500 Trees At P&T Colony, Kaval Bairasandra, Bengaluru",
    image : "https://kettocdn.gumlet.io/media/campaign/206000/206033/image/wid60f17746e1b9d.jpg?w=300&dpr=1.3",
    userImage : "https://kettocdn.gumlet.io/media/ngo/1514000/1514091/image/5fd08dc58cf32.jpg?w=50&dpr=1.3",
    fundraiser : "Happy World Foundation",
    daysLeft : 5,
    supporters : 94,
    category : "Environment",
    raised : 294731,
    goal :  600000
   }, 

  ] 
 

  localStorage.setItem("fund_raisers", JSON.stringify(fund_raisers));

  function removeAllChildNodes(parent){
      while(parent.firstChild){
          parent.removeChild(parent.firstChild);
      }
  }
  
  function showFundraisers(cat){
    
    const fundRaiserDiv = document.querySelector('#fundraisers');
      
    removeAllChildNodes(fundRaiserDiv);

    let raised_category = cat.innerText ;
  
    let MyFundraisers = JSON.parse(localStorage.getItem("fund_raisers"));

    MyFundraisers.forEach( function(data){
       
     
         
       if(data.category == raised_category){

         let imageTag = document.createElement('img');
         imageTag.src = data.image;

         let titleTag = document.createElement('p');
         titleTag.setAttribute('id','titleText');
         titleTag.innerText = data.title;
         
         let userLogo = document.createElement('img');
         userLogo.src = data.userImage;
         userLogo.style.borderRadius = "50%";
         userLogo.style.width = "30px"
         userLogo.style.height = "30px";
         userLogo.style.marginLeft ="16px"
          
         
         let raiser = document.createElement('p');
         raiser.setAttribute('id','raiserText');
         raiser.innerText = "by " + data.fundraiser;


         let raisedFund = document.createElement('p');
         raisedFund.setAttribute('id','raisedFund');
         var number = data.raised;
         raisedFund.innerHTML  = number.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR'
        }); 
        

        let progress_Bar = document.createElement('div');
        progress_Bar.setAttribute('id','progressBar');
      
        let progress_done = document.createElement('div');
        progress_done.setAttribute('id','progressDone');
        
       let widthPercentage = (data.raised/data.goal)*100;
       let progressWidth = widthPercentage.toString() + "%";
       progress_done.style.width = progressWidth;

       progress_Bar.append(progress_done);

        let textraised = document.createElement('p');
        textraised.setAttribute('id',"txtraised");
        textraised.innerText = "raised";


        let daysTag = document.createElement('p');
        daysTag.innerText = data.daysLeft;
        daysTag.setAttribute('id','days');
         
        let text1 = document.createElement('p');
        text1.innerText = "Days Left";
        text1.setAttribute('id','txt1');


        let supportTag = document.createElement('p');
        supportTag.innerText = data.supporters;
        supportTag.setAttribute('id','supporters');
     
        let text2 = document.createElement('p');
        text2.innerText = "Supporters";
        text2.setAttribute('id','txt2');

         let innerDiv = document.createElement('a');
         innerDiv.style.textDecoration = "none";
         innerDiv.href = "#";
         innerDiv.style.color = "inherit";

         innerDiv.append(imageTag,titleTag,userLogo,raiser,raisedFund,textraised,progress_Bar,daysTag,text1,supportTag,text2);

          document.getElementById('fundraisers').append(innerDiv);

       }

    });

  }
