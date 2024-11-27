$(".blog-detail").fadeOut();
//Array of Blogs
var blogs = [{
  "title": "Travel to Exhibition at Apsara Fairy Cafe",
  "mainImg": ["../../public/blogs post/blog khmer vintage/khmer-vintage.jpg", "../../public/blogs post/blog khmer vintage/khmer-vintage1.jpg", "../../public/blogs post/blog khmer vintage/khmer-vintage2.jpg",
    "../../public/blogs post/blog khmer vintage/khmer-vintage3.jpg","../../public/blogs post/blog khmer vintage/khmer-vintage4.jpg","../../public/blogs post/blog khmer vintage/khmer-vintage5.jpg"
  ],
  "alt": "Apsara Fairy Cafe Images",
  "date": "Nov 06, 2023",
  "location": "Apsara Fairy Cafe, Phnom Penh",
  "descEng": "Location to sell books, souvenirs, Khmer antiques, educational materials, business people want to produce videos, presentations, views, share educational videos, need a location to record and sell",
  "descKhmer": "ទីតាំងដើម្បីតាំងលក់ សៀវភៅ ផលិតផលអនុស្សាវរីយ៍ វត្ថុបុរាណខ្មែរ សម្ភារះអប់រំសិក្សា ពាណិជ្ជករចង់ផលិតវីដេអូបទបង្ហាញអំពីទស្សនៈចែករំលែក វិដេអូអបរំ ត្រូវការទីតាំងថត និងតាំងលក់។"
},{
  "title": "ស្នាដៃសិល្បៈផ្តិតពុម្ព របស់និស្សិតឆ្នាំទី២",
  "mainImg": ["../../public/blogs post/blog student university/student printed image.jpg","../../public/blogs post/blog student university/student printed image1.jpg","../../public/blogs post/blog student university/student printed image2.jpg","../../public/blogs post/blog student university/student printed image3.jpg"],
  "alt": "Images",
  "date": "Apr 05, 2024",
  "location": "Phnom Penh",
  "descEng": "Printed artwork of second year students of the Faculty of Visual Arts participated in the Talent and Design School students' art exhibition program.",
  "descKhmer": "ស្នាដៃសិល្បៈផ្តិតពុម្ព របស់និស្សិតឆ្នាំទី២ នៃមហាវិទ្យាល័យសិល្បៈសូនរូប ចូលរួមក្នុងកម្មវិធីពិព័ណ៍ ទេពកោសល្យ និងស្នាដៃនិស្សិត សាលារចនា។ សិល្បៈផ្តិតពុម្ព ជាសិល្បៈមួយប្រភេទដែលមានប្រភពមកពីប្រទេសប៉ែកខាងអឺរ៉ុប បច្ចុប្បន្នជំនាញនេះ ត្រូវបានដាក់បញ្ចូលឱ្យសិក្សានៅក្នុងមហាវិទ្យាល័យសិល្បៈសូនរូប នៃសាកលវិទ្យាល័យភូមិន្ទវិចិត្រសិល្បៈ។"
},{
  "title": "Siem Reap Provincial Administration",
  "mainImg": ["../../public/blogs post/blog smile of cambodia/smile of cambodia image.jpg","../../public/blogs post/blog smile of cambodia/smile of cambodia image1.jpg","../../public/blogs post/blog smile of cambodia/smile of cambodia image2.jpg","../../public/blogs post/blog smile of cambodia/smile of cambodia image3.jpg"],
  "alt": "Images",
  "date": "Aug 07, 2024",
  "location": "Siem Reap Provincial Administration, Siem Riep",
  "descEng": "The Khmer Artists Association will organize the event 'Smile of Cambodia', organize a number of activities, including entertainment programs, small exhibitions of Khmer cuisine, create works to promote culture, create an atmosphere and some other programs.",
  "descKhmer": "សមាគមសិល្បករខ្មែរនឹងរៀបចំព្រឹត្តិការណ៍ «ស្នាមញញឹមនៃកម្ពុជា»រៀបចំនូវសកម្មភាពមួយចំនួនរួមមាន កម្មវិធីកម្សាន្ត​ ការបង្ហាញពិព័រណ៍ខ្នាត តូចនៃមុខម្ហូបខ្មែរ បង្កើតនូវស្នាដៃផ្សព្វផ្សាយពីវប្បធម៌ បង្កបរិយាកាស និងកម្មវិធីផ្សេងៗមួយចំនួនទៀត​ ដេីម្បីជាស្នាមញញឹមដល់ភ្ញៀវទេសចរដែលបានមកចូលរួមក្នុងព្រឹត្តិការណ៍នេះសូមបងប្អូន​ និងភ្ញៀវទេសចរអញ្ជេីញចូលរួមឱ្យបានច្រេីនកុះករ។"
},{
  "title": "Travel to Bali Indonesia",
  "mainImg": ["../../public/blogs post/blog bali iceland/bali images.jpg","../../public/blogs post/blog bali iceland/bali images1.jpg","../../public/blogs post/blog bali iceland/bali images2.jpg","../../public/blogs post/blog bali iceland/bali images3.jpg","../../public/blogs post/blog bali iceland/bali images4.jpg"],
  "alt": "Bali Images",
  "date": "Oct 17, 2024",
  "location": "Bali Iceland, Indonesia",
  "descEng": "5-day package tour to Indonesia, Bali",
  "descKhmer": "កញ្ចប់ដំណើរកម្សាន្តទៅកាន់ប្រទេសឥណ្ឌូនេសុី កោះបាលី5ថ្ងៃ🌴"
},{
  "title": "Mondulkiri, a wonderful land",
  "mainImg": ["../../public/blogs post/blog mondolkiri travel/modolkiri image.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image1.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image2.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image3.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image4.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image5.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image6.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image7.jpg","../../public/blogs post/blog mondolkiri travel/modolkiri image8.jpg"],
  "alt": "wonderful land Images",
  "date": "Nov 23, 2024",
  "location": "Mondulkiri",
  "descEng": "Mondulkiri, a wonderful land",
  "descKhmer": "🌻អណ្តូងស្នេហ៏ ឬ វាលស្មៅប្រែពណ៏ ផ្លូវអក្សរ 🌻ភ្នំដោះក្រមុំ (ស្លាកខ្ញុំស្រលាញ់ខេត្តមណ្ឌលគិរី)🌻សមុទ្រឈើភ្នំឡៅកា 🌻ទឹកជ្រោះប៊ូស្រា🌻ចំការតែ រូបសំណាកមុខយក្ស🌻ចម្ការកាហ្វេ🌻ថតរូបជុំគ្នានៅរង្វង់មូលគោព្រៃ"
},{
  "title": "BigTree Community Mall Market",
  "mainImg": ["../../public/blogs post/blog bigtree community/bigtree image.jpg","../../public/blogs post/blog bigtree community/bigtree image1.jpg","../../public/blogs post/blog bigtree community/bigtree image2.jpg","../../public/blogs post/blog bigtree community/bigtree image3.jpg","../../public/blogs post/blog bigtree community/bigtree image4.jpg"],
  "alt": "BigTree Community Mall Images",
  "date": "Nov 27, 2024",
  "location": "BigTree Community Mall, Phnom Penh",
  "descEng": "Some pictures of your participation in our weekend market event at BigTree Community Mall last week",
  "descKhmer": "រូបភាពខ្លះៗពីសកម្មភាពចូលរួមរបស់បងប្អូនក្នុងកម្មពិធីផ្សារចុងសប្តាហ៍យើងខ្ញុំនៅទីតាំងផ្សារទំនើប BigTree Community Mall ​​កាលពីសប្តាហ៍មុន 🥰"
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
                  <i class="fa-classic fa-regular fa-calendar-days fa-fw"></i>
                    ${e.date}
                  </h3>
                  <h2>${e.title.slice(0,17)+"..."}</h2>
                  <p>${e.descEng.slice(0,72)+"..."}</p>
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
                      <div class="blog-images">
                        <img src="${e.mainImg[0]}">
                      </div>
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
        $(".blog-images").html(txtImg);
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
        $(".blog-images").html(txtImg);
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
