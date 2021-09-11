function nextButtonHandler(){

    var amount_raised = document.getElementById('amount').value;
    var imageUrl = document.getElementById('imageaddress').value;
    var userphoto = document.getElementById('userImage').value;
    var campTitle = document.getElementById('campaigntitle').value;
    if(amount_raised <2000){
        window.alert("Raised Amount Should be more than 2000");
    }

    else if(amount_raised=="" || imageUrl=="" || userphoto=="" ||campTitle==""){
        window.alert("Please Fill All the details");
    }
    else{

      var user_object = JSON.parse(localStorage.getItem("userDetails"));
      user_object.goal = Number(amount_raised);
      user_object.image = imageUrl;
      user_object.userImage = userphoto;
      user_object.title = campTitle;
      localStorage.setItem("userDetails",JSON.stringify(user_object));
      location.href = "fundraiser2.html";
    }

   }