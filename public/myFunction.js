//Array of Coding Icons Skills
var codeSkills = [{
  "img": "./public/icon images/cplusplus-icon.png",
  "alt": "C++ Programing"
}, {
  "img": "./public/icon images/html5-icon.png",
  "alt":"HTML"
}, {
  "img": "./public/icon images/css3-icon.png",
  "alt":"CSS"
}, {
  "img": "./public/icon images/git-icon.png",
  "alt":"Git"
}, {
  "img": "./public/icon images/javascript-icon.png",
  "alt":"Javascript"
}, {
  "img": "./public/icon images/bootstrap-icon.png",
  "alt":"Bootstrapt"
}, {
  "img": "./public/icon images/jquery-icon.png",
  "alt":"jQuery"
  }];

//function Show all Icon of code Skills
showCodeSkill();
function showCodeSkill() {
  let txt = " ";
  codeSkills.map(e => {
    txt += `<li class="upDownLoop">
              <img src="${e.img}" alt="${e.alt}">
            </li>`;
  });
  document.querySelector(".coding-skills ul").innerHTML=txt;
}
