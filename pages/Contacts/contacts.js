//Array Object Contacts
var objectContacts = [{
  "icon": '<i class="fa-solid fa-mobile-screen-button"></i>',
  "title": "Phone:",
  "desc":"+85596 356 9994"
}, {
  "icon": '<i class="fa-regular fa-envelope"></i>',
  "title": "Email:",
  "desc":"senkhemrin@gmail.com"
}, {
  "icon": '<i class="fa-solid fa-location-dot"></i>',
  "title": "Current Address:",
  "desc":"St 110, Saensokh District, Tuek Thla Commune, Phnom Penh."
  }];
//function show contacts
showContacts();
function showContacts() {
  let txt = "";
  objectContacts.map((e, i) => {
    txt += `<div class="contact-info">
              <div class="contact-icon">
                ${e.icon}
              </div>
              <div class="contact-title">
                <h2>${e.title}</h2>
                <p>${e.desc}</p>
              </div>
            </div>`;
  });
  $(".contact-me-left").prepend(txt);
}

//Array Object More Contacts
var MoreContacts = [{
  "linkContact": "tel:+855963569994",
  "imgLogo":"../../public/logo images/6596115.png"
}, {
  "linkContact": "https://www.facebook.com/KhemrinSen356?mibextid=ZbWKwL",
  "imgLogo":"../../public/logo images/Facebook-logo.png"
}, {
  "linkContact": "https://t.me/khemrinsen",
  "imgLogo":"../../public/logo images/Telegram-logo.png"
  }, {
  "linkContact": "mailto: senkhemrin@gmail.com",
  "imgLogo":"../../public/logo images/Gmail-logo.png"
  }, {
  "linkContact": "https://www.linkedin.com/in/khemrin-sen-70a093267/",
  "imgLogo":"../../public/logo images/Linkedin-logo.webp"
  }];
//function Show More Contacts
showMoreContacts();
function showMoreContacts() {
  let txt = "";
  MoreContacts.map((e, i) => {
    txt += `<li>
              <a href="${e.linkContact}" target=" _blank">
                <img src="${e.imgLogo}">
              </a>
            </li>`;
  });
  $(".contact-more ul").html(txt);
}