var main = document.getElementsByClassName('main');

var footer = document.createElement("div");
footer.setAttribute('id', 'footer');

var upper = document.createElement("div");
upper.setAttribute('id','upper');

var left = document.createElement("div");
left.setAttribute('id','right');

var right = document.createElement("div");
right.setAttribute('id','left');

//right div

var kettoImg = document.createElement('img');
kettoImg.src = "https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.3";
kettoImg.style.width = "80px";
kettoImg.style.height = "40px";

var icons = document.createElement('div');
icons.setAttribute('id', 'icons');

var i1 = document.createElement('img');
i1.src = "../images/Screenshot.png";

icons.append(i1);

var follow = document.createElement('div');
follow.setAttribute('id','follow');

var num = document.createElement('h2');
num.textContent = "1.5M+";
num.setAttribute('class','font-color_3 font-style');

var f = document.createElement('p');
f.textContent = "Followers"
f.setAttribute('class','font-style');
f.style.color ="#77cac8";

follow.append(num,f);

var contact = document.createElement('div');
contact.setAttribute('id','contact');

var h3_1 = document.createElement('h3');
h3_1.textContent = "For any queries";
h3_1.setAttribute('class','font-style img-inner-div-info-size_2 font-color_3')

var h3_2 = document.createElement('h3');
h3_2.textContent = "Email: info@ketto.org";
h3_2.setAttribute('class','font-style img-inner-div-info-size_2 font-color_3');

var h3_3 = document.createElement('h3');
h3_3.textContent = "Contact No: +91 7700975559";
h3_3.setAttribute('class','font-style img-inner-div-info-size_2 font-color_3');

contact.append(h3_1, h3_2, h3_3);

//left div

var l1 = document.createElement('div');
var l2 = document.createElement('div');
var l3 = document.createElement('div');
var l4 = document.createElement('div');

left.append(l1,l2,l3,l4);

var h4 = document.createElement('h4');
h4.textContent = "Causes";
h4.setAttribute('class','h4Footer');

var p1 = document.createElement('p');
p1.textContent = "Medical crowdfunding";
p1.setAttribute('class','pFooter');

var p2 = document.createElement('p');
p2.textContent = "Cancer Crowdfunding";
p2.setAttribute('class','pFooter');

var p3 = document.createElement('p');
p3.textContent = "Education Crowdfunding";
p3.setAttribute('class','pFooter');

var p4 = document.createElement('p');
p4.textContent = "Creative Fundraising";
p4.setAttribute('class','pFooter');

var p5 = document.createElement('p');
p5.textContent = "Child Welfare";
p5.setAttribute('class','pFooter');

var p6 = document.createElement('p');
p6.textContent = "Animal Fundraisers";
p6.setAttribute('class','pFooter');

l1.append(h4,p1,p2,p3,p4,p5,p6);

var h4_2 = document.createElement('h4');
h4_2.textContent = "How it works?";
h4_2.setAttribute('class','h4Footer');

var p1_2 = document.createElement('p');
p1_2.textContent = "Fundraising for NGOs";
p1_2.setAttribute('class','pFooter');

var p2_2 = document.createElement('p');
p2_2.textContent = "Corporates";
p2_2.setAttribute('class','pFooter');

var p3_2 = document.createElement('p');
p3_2.textContent = "Browse Fundraiser";
p3_2.setAttribute('class','pFooter');

var p4_2 = document.createElement('p');
p4_2.textContent = "What is Crowdfunding?";
p4_2.setAttribute('class','pFooter');

var p5_2 = document.createElement('p');
p5_2.textContent = "COVID-19 Relief Fund";
p5_2.setAttribute('class','pFooter');

var p6_2 = document.createElement('p');
p6_2.textContent = "Withdraw Funds";
p6_2.setAttribute('class','pFooter');

l2.append(h4_2,p1_2,p2_2,p3_2,p4_2,p5_2,p6_2);

var h4_3 = document.createElement('h4');
h4_3.textContent = "About Us";
h4_3.setAttribute('class','h4Footer');

var p1_3 = document.createElement('p');
p1_3.textContent = "Team Ketto";
p1_3.setAttribute('class','pFooter');

var p2_3 = document.createElement('p');
p2_3.textContent = "In The News";
p2_3.setAttribute('class','pFooter');

var p3_3 = document.createElement('p');
p3_3.textContent = "Our Partners";
p3_3.setAttribute('class','pFooter');

var p4_3 = document.createElement('p');
p4_3.textContent = "Careers?";
p4_3.setAttribute('class','pFooter');

var p5_3 = document.createElement('p');
p5_3.textContent = "Ketto Blog";
p5_3.setAttribute('class','pFooter');

var p6_3 = document.createElement('p');
p6_3.textContent = "Success Stories";
p6_3.setAttribute('class','pFooter');

l3.append(h4_3,p1_3,p2_3,p3_3,p4_3,p5_3,p6_3);

var h4_4 = document.createElement('h4');
h4_4.textContent = "About Us";
h4_4.setAttribute('class','h4Footer');

var p1_4 = document.createElement('p');
p1_4.textContent = "Team Ketto";
p1_4.setAttribute('class','pFooter');

var p2_4 = document.createElement('p');
p2_4.textContent = "In The News";
p2_4.setAttribute('class','pFooter');

var p3_4 = document.createElement('p');
p3_4.textContent = "Our Partners";
p3_4.setAttribute('class','pFooter');

var p4_4 = document.createElement('p');
p4_4.textContent = "Careers?";
p4_4.setAttribute('class','pFooter');

var p5_4 = document.createElement('p');
p5_4.textContent = "Ketto Blog";
p5_4.setAttribute('class','pFooter');

var p6_4 = document.createElement('p');
p6_4.textContent = "Success Stories";
p6_4.setAttribute('class','pFooter');

l4.append(h4_4,p1_4,p2_4,p3_4,p4_4,p5_4,p6_4);

//mid

var mid = document.createElement('div');
mid.style.width ="100%";
mid.style.height = "50px";
mid.style.marginTop = "50px"

var img1 = document.createElement('img');
img1.src = "https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.3";
img1.style.float = "right";
img1.style.width = "400px";
img1.style.height = "30px";
img1.style.marginRight = "150px";

mid.appendChild(img1);

//lower

var low = document.createElement('div');
low.style.width = "80%";
low.style.height = "50px";
low.style.margin = "auto";
low.style.paddingTop = "15px"
low.style.borderTop = "1px solid rgb(97, 97, 97)";

var p90 = document.createElement('p');
p90.textContent = "Copyright © 2021 Ketto Online Ventures Pvt Ltd. All Rights Reserved. Terms of Use | Privacy Policy | AML Policy | Use of cookies";
p90.style.textAlign = "center";
p90.style.color = "white";

low.appendChild(p90);

main[0].appendChild(footer);

footer.append(upper,mid,low);

upper.append(left,right);

right.append(kettoImg, icons, follow, contact);




