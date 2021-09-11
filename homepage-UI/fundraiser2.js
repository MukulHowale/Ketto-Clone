function nexHandler(){
    var patientname = document.getElementById('patientName').value;
    var Condition = document.getElementById('medicalCond').value;
    var hospt = document.getElementById('hospital').value;
    var city = document.getElementById('City').value;

    if(patientname=="" || Condition=="" || hospt=="" || city=="" ){
        window.alert("Please Fill all the details");
    }
    else{  
       var user_object = JSON.parse(localStorage.getItem("userDetails"));
       user_object.patient = patientname;
       localStorage.setItem("userDetails",JSON.stringify(user_object));
       var fndraisersArray = JSON.parse(localStorage.getItem("fund_raisers"));
       
       fndraisersArray.push(user_object);
       localStorage.setItem("fund_raisers",JSON.stringify(fndraisersArray));
       
         window.alert("Congratulations Your Fundraiser is LIVE !!!!")
        location.href = "homepage.html";
    }

   }