 
 
 //hide content for responsice navbar menu

 function hidebrowsePage(){
  var chboxs = document.getElementsByName("chckbox");
  var vis = "block";
  for(var i=0;i<chboxs.length;i++) { 
      if(chboxs[i].checked){
       vis = "none";
          break;
      }
  }
  document.getElementById('backgroundImage').style.display = vis;
  document.getElementById('backText').style.display = vis;
  document.getElementById('categories').style.display = vis;
  document.getElementById('fundraisers').style.display = vis;
  document.getElementsByClassName('main').style.display = vis;
}


  var fund_raisers = JSON.parse(localStorage.getItem("fund_raisers"));
   
  // if(newAdded !== undefined || newAdded.patient != ""){
  //   console.log(" new card added ");
  //   fund_raisers.push(newAdded);
  // }

  localStorage.setItem("fund_raisers",JSON.stringify(fund_raisers));

  function removeAllChildNodes(parent){
      while(parent.firstChild){
          parent.removeChild(parent.firstChild);
      }
  }

   window.onload = function(){

    fund_raisers.forEach( function(data){
      console.log("ok");
         let imageTag = document.createElement('img');
         imageTag.src = data.image;

         let titleTag = document.createElement('p');
         titleTag.setAttribute('id','titleText');
         titleTag.innerText = data.title;
         
         let userLogo = document.createElement('img');
         userLogo.src = data.userImage;
         userLogo.alt = "";
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
         innerDiv.setAttribute('id',data.fundraiser);   //giving id to each cards as name of the Fundraiser
         innerDiv.setAttribute('onclick',"individualCard(this.id)");
          document.getElementById('fundraisers').append(innerDiv);
    });
  }

  function showFundraisers(cat){
    
    const fundRaiserDiv = document.querySelector('#fundraisers');
      
    removeAllChildNodes(fundRaiserDiv);

    let raised_category = cat.innerText ;

    fund_raisers.forEach( function(data){
       
     
         
       if(data.category == raised_category){

         let imageTag = document.createElement('img');
         imageTag.src = data.image;

         let titleTag = document.createElement('p');
         titleTag.setAttribute('id','titleText');
         titleTag.innerText = data.title;
         
         let userLogo = document.createElement('img');
         userLogo.src = data.userImage;
         userLogo.alt = "";
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
         innerDiv.setAttribute('id',data.fundraiser);  //giving id to each cards as name of the Fundraiser
         innerDiv.setAttribute("onclick","individualCard(this.id)");
         document.getElementById('fundraisers').append(innerDiv);

       }
    });
  }

   //function to handle the click on individual cards
   function  individualCard(name){
       var para = new URLSearchParams();
       para.append("fundRaiser",name);
       location.href = "../donate/donate.html?" + para.toString();
   }