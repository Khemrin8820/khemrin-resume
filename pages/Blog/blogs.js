$(".blog-detail").fadeOut();
//Array of Blogs
var blogs = [{
  "title": "Portfolio",
  "mainImg": ["../../public/blogs post/blog1/khemrin-images1.png","../../public/khemrin-images1.png","../../public/khemrin-images2.png"],
  "alt": "Card",
  "date": "June 30, 2021",
  "location": "Phnom Penh",
  "descEng": "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  "descKhmer": "ការណែនាំអំពីម៉ាស៊ីនភ្លើង Lorem Ipsum សម្រាប់ឧបករណ៍ Android! ទទួលបានបទពិសោធន៍នៃភាពបត់បែនដែលមិនអាចប្រៀបផ្ទឹមបានជាមួយនឹងការគ្រប់គ្រងពេញលេញលើចំនួនពាក្យ"
}];
//Function show blogs post
showBlogs();
function showBlogs() {
  let txt = "";
  blogs.map((e, i) => {
    txt += `<li data-ind="${i}">
              <a href="#">
                <div class="image-card">
                  <img src="${e.mainImg[0]}  " alt="${e.alt}">
                </div>
                <div class="title-card">
                  <h3>
                    <i class="fa-solid fa-location-dot"></i>
                    ${e.date}
                  </h3>
                  <h2>${e.title}</h2>
                  <p>${e.descEng}</p>
                  <h4>Read More</h4>
                </div>
              </a>
            </li>`;
  });
  $(".title-my-blog ul").html(txt);
  //Click a Blogs to show blog detail
  $(".title-my-blog ul li").click(function () {
    $(".blog-detail").fadeIn();
    let dataInd = $(this).data("ind");
    let txt = "";
    let txtImg = "";
    let arrImg = [];
    let current = 0;
    blogs.map((e, i) => {
      if (dataInd == i) {
        txt = `
              <div class="blog-info-img">
                    <i class="fa-solid fa-less-than less-icon" id="btnPrev"></i>
                    <img src="${e.mainImg[0]}">
                    <i class="fa-solid fa-greater-than greater-icon" id="btnNext"></i>
              </div>
              <div class="blog-info-desc">
                <h2 id="location">
                  <i class="fa-classic fa-regular fa-calendar-days fa-fw"></i>
                  <span>${e.date}</span>
                </h2>
                <h2>
                  <i class="fa-classic fa-solid fa-location-dot fa-fw"></i>
                  <span>${e.location}</span>
                </h2>
                <h3>${e.title}</h3>
                <h6>English Language:</h6>
                <p>${e.descEng}</p>
                <h5>Khmer Language:</h5>
                <h4>${e.descKhmer}</h4>
              </div>
              <div class="btn-close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>`;
        arrImg = e.mainImg;
      }
      
    });
    $(".blog-info").html(txt);
    //Click Previous or Next Button to show other image
    $("#btnPrev").hide();
    $("#btnPrev").click(function () {
      if (current > 0) {
        current--;
        txtImg = `<img src="${arrImg[current]}">`;
        $(".blog-info-img #btnPrev").after(txtImg);
        $("#btnNext").show();
        if (current == 0) {
          $("#btnPrev").hide();
        }
      } 
    });
    $("#btnNext").click(function () {
      if (current < arrImg.length - 1) { //0<1 1<2
        current++;
        txtImg = `<img src="${arrImg[current]}">`;
        $(".blog-info-img #btnPrev").after(txtImg).fadeIn();
        $("#btnPrev").show();
        if (current == arrImg.length - 1) {
          $("#btnNext").hide();
        }
      } 
     
      
    });
    //Button Close
    $(".btn-close").click(function () {
      $(".blog-detail").fadeOut();
    });
  });
}
