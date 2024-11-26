//Array of Blogs
var blogs = [{
  "title": "Portfolio",
  "mainImg": "../../public/khemrin-images.jpg",
  "alt": "Card",
  "date": "June 30, 2021",
  "desc": "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  "location": "Phnom Penh"
}, {
  "title": "Portfolio",
  "mainImg": "../../public/khemrin-images1.png",
  "alt": "Card",
  "date": "June 30, 2021",
  "desc": "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  "location": "Phnom Penh"
}, {
  "title": "Portfolio",
  "mainImg": "../../public/khemrin-images2.png",
  "alt": "Card",
  "date": "June 30, 2021",
  "desc": "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  "location": "Phnom Penh"
}, {
  "title": "Portfolio",
  "mainImg": "../../public/khemrin-images3.jpg",
  "alt": "Card",
  "date": "June 30, 2021",
  "desc": "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  "location": "Phnom Penh"
}, {
  "title": "Portfolio",
  "mainImg": "../../public/khemrin-images.jpg",
  "alt": "Card",
  "date": "June 30, 2021",
  "desc": "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  "location": "Phnom Penh"
  }];
//Function show blogs post
showBlogs();
function showBlogs() {
  let txt = "";
  blogs.map((e, i) => {
    txt += `<li>
              <a href="#">
                <div class="image-card">
                  <img src="${e.mainImg}" alt="${e.alt}">
                </div>
                <div class="title-card">
                  <h3>
                    <i class="fa-solid fa-location-dot"></i>
                    ${e.date}
                  </h3>
                  <h2>${e.title}</h2>
                  <p>${e.desc}</p>
                  <h4>Read More</h4>
                </div>
              </a>
            </li>`;
  });
  $(".title-my-blog ul").html(txt);
}
//Button Close
$(".btn-close").click(function () {
  $(".blog-detail").fadeOut();
});