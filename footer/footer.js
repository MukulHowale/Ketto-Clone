var main = document.getElementById('main');

var footer = document.createElement("div");
footer.setAttribute('id', 'footer');

var upper = document.createElement("div");
upper.setAttribute('id','upper');

var left = document.createElement("div");
left.setAttribute('id','right');

var right = document.createElement("div");
right.setAttribute('id','left');

var kettoImg = document.createElement('img');
kettoImg.src = "https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.3";
kettoImg.style.width = "80px";
kettoImg.style.height = "40px";

var icons = document.createElement('div');
icons.setAttribute('id', 'icons');

var i1 = document.createElement('img');
i1.src = "D:/VSCodeWorkspace/HTML,CSS,JS/Ketto-Clone/images/Screenshot.png";

icons.append(i1);

var follow = document.createElement('div');
follow.setAttribute('id','follow');

var contact = document.createElement('div');
contact.setAttribute('id','contact');

main.appendChild(footer);

footer.append(upper);

upper.append(left,right);

right.append(kettoImg, icons, follow, contact);



