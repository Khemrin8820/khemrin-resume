
//Array of percentage skill Images
var percentSkills = [{
  "title": "Photoshop",
  "img":"../../public/percentage skill/60.png"
}, {
  "title": "Figma",
  "img":"../../public/percentage skill/70.png"
}, {
  "title": "C++",
  "img":"../../public/percentage skill/70.png"
}, {
  "title": "HTML",
  "img":"../../public/percentage skill/80.png"
}, {
  "title": "CSS",
  "img":"../../public/percentage skill/80.png"
}, {
  "title": "Javascript",
  "img":"../../public/percentage skill/80.png"
}, {
  "title": "Bootstrapt",
  "img":"../../public/percentage skill/60.png"
}, {
  "title": "jQuery",
  "img":"../../public/percentage skill/70.png"
  }];

//function Show all images of Skill
showPercentSkill();
function showPercentSkill() {
  let txt = " ";
  percentSkills.map(e => {
    txt += `<li>
              <h3>${e.title}</h3>
              <img src="${e.img}">
            </li>`;
  });
  $(".skills ul").html(txt);
}