$(".less-icon").hide();
//Frontend Project
var frontendProjectImages = [{
  "title": "My Old Resume Website",
  "testLink": "https://khemrin8820.github.io/My-Old-Resume/",
  "codeProject": "https://github.com/Khemrin8820/My-Old-Resume",
  "mainImg": "../../public/project images/My Old Resume Website/old resume image.jpg",
  "desc":"This Project I used coding like JS, jQuery, CSS, HTML. Ux is my mine creation Idea. I'm focus good Responsive for Mobile & Laptop."
},{
  "title": "My Current Website",
  "testLink": "https://khemrin8820.github.io/khemrin-resume/",
  "codeProject": "https://github.com/Khemrin8820/khemrin-resume",
  "mainImg": "../../public/project images/My Current Website/My Currrent Website.jpg",
  "desc":"This Project I used coding like JS, jQuery, CSS, HTML. Ux is my mine creation idea. I'm focus good Responsive for Mobile & Laptop."
}];

//Overflow-y Scroll when project greater 4 for mobile
  let projectLength = frontendProjectImages.length;
  console.log(projectLength);
  if (projectLength > 4) {
    $("#mobile-respond").css({ "overflow-y":"scroll"});
  }
  if (projectLength > 8) {
    $("#laptop-respond").css({ "overflow-y": "scroll" });
  }
//Function Show Projects
showProjectImages();
function showProjectImages() {
  let txt = "";
  frontendProjectImages.map((e,i) => {
    txt += `<li data-ind="${i}">
              <img src="${e.mainImg}">
            </li>`;
  });
  $(".projects-images ul").html(txt);
  //Click On project to show project detail
  $(".project-detail").fadeOut();
  $(".projects-images ul li").click(function () {
    let dataInd = $(this).data("ind");
    let txt = "";
    frontendProjectImages.map((e, i) => {
      if (dataInd == i) {
        $(".project-detail").fadeIn();
        txt = `<div class="project-info-img">
                  <img src="${e.mainImg}">
              </div>
              <div class="project-info-desc">
                  <h3>${e.title}</h3>
                  <h4>Test It: <a href="${e.testLink}" target="_blank">${e.testLink}</a></h4>
                  <h5>See Code Project: <a href="${e.codeProject}" target="_blank">${e.codeProject}</a></h5>
                  <h6>Description:</h6>
                  <p>${e.desc}</p>
              </div>
              <div class="btn-close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>`;
      }
      $(".project-info").html(txt);
    });
    //Button Click Close and Open Project
    $(".btn-close").click(function () {
        $(".project-detail").fadeOut();
    });
  });
}

