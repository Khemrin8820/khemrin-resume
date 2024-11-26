var projectImages = [{
  "title": "Portfolio",
  "testLink": "www.google.com",
  "codeProject": "www.github.com",
  "mainImg": "../../public/khemrin-images.jpg",
  "img1": "../../public/khemrin-images.jpg",
  "img2":"../../public/khemrin-images.jpg",
  "desc":"This Project I used coding like Javascript, jQuery, CSS, HTML."
}, {
  "title": "Portfolio",
  "testLink": "www.google.com",
  "codeProject": "www.github.com",
  "mainImg": "../../public/khemrin-images.jpg",
  "img1": "../../public/khemrin-images.jpg",
  "img2":"../../public/khemrin-images.jpg",
  "desc":"This Project I used coding like Javascript, jQuery, CSS, HTML."
}, {
  "title": "Portfolio",
  "testLink": "www.google.com",
  "codeProject": "www.github.com",
  "mainImg": "../../public/khemrin-images.jpg",
  "img1": "../../public/khemrin-images.jpg",
  "img2":"../../public/khemrin-images.jpg",
  "desc":"This Project I used coding like Javascript, jQuery, CSS, HTML."
}, {
  "title": "Portfolio",
  "testLink": "www.google.com",
  "codeProject": "www.github.com",
  "mainImg": "../../public/khemrin-images.jpg",
  "img1": "../../public/khemrin-images.jpg",
  "img2":"../../public/khemrin-images.jpg",
  "desc":"This Project I used coding like Javascript, jQuery, CSS, HTML."
  }];

showProjectImages();
function showProjectImages() {
  let txt = "";
  projectImages.map(e => {
    txt += `<li>
              <img src="${e.mainImg}">
            </li>`;
  });
  document.querySelector(".projects-images #laptop-respond").innerHTML = txt;
  document.querySelector(".projects-images #mobile-respond").innerHTML = txt;
}

