
 var newpara = new URLSearchParams(window.location.search);

 var raiser = newpara.get("fundRaiser");

 let Myfundraiser_Array = JSON.parse(localStorage.getItem("fund_raisers"));

 function makePay(){
    var payAmount = document.getElementById("donationamount").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var phoneno = document.getElementById("mobile").value;
    var address = document.getElementById("mobile").value;
 
   
    if(payAmount =="" || name=="" || email=="" || phoneno=="" ||address==""){
        window.alert("Please Fill all the details");
    }
    else if( payAmount < 100 ){
        window.alert("Minimum Donation Amount is 100");
    }
    else {
      Myfundraiser_Array.forEach( function(object){

         if(object.fundraiser==raiser){
            var currentRaised = Number(object.raised);
            var currentSupporter =  Number(object.supporters);
            object.raised = currentRaised + Number(payAmount) ;
            object.supporters = currentSupporter + 1;
            console.log(object.raised);
         }

       });
 
      localStorage.setItem("fund_raisers",JSON.stringify(Myfundraiser_Array));
      window.alert("THANK YOU FOR DONATING");
      location.href = "../homepage-UI/homepage.html"
    }
 }