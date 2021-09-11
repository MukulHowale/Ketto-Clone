var userdetail = {
    title : "",
    image : "",
    userImage : " ",
    fundraiser : "",
    daysLeft : 10,
    supporters : 0,
    category : "Medical",
    raised : 0,
    goal :  0,
    patient: ""
   };

     
   
   localStorage.setItem("userDetails",JSON.stringify(userdetail));

 function raiseFund(){

    var phoneno = /^\d{10}$/;
    var emialvalidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

     var mail = document.getElementById('mail').value;
     var name = document.getElementById('name').value;
     var password = document.getElementById('password').value;
     var mobile = document.getElementById('phone').value;

     if( mail=="" || name =="" || password=="" || mobile==""){
         window.alert('Please Fill all the details');
     }
     
     else if( !mail.match(emialvalidRegex)){
         window.alert("Invalid Email ID");
     }

    else if(!mobile.match(phoneno)){
         window.alert("Please Enter 10 Digit Mobile no");

     }

    else  if(!password.match(passw)){
         window.alert("Password must have 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        location.href = "Fundraiser.html"   
     }

    else{
      var user_object = JSON.parse(localStorage.getItem("userDetails"));

       user_object.fundraiser = name;
       localStorage.setItem("userDetails",JSON.stringify(user_object));


       location.href = "fundraiser1.html";
    }
 }
