const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

//nav
const nav1 = document.querySelectorAll("a");
nav1[0].textContent = siteContent["nav"]["nav-item-1"];

const nav2 = document.querySelectorAll("a");
nav1[1].textContent = siteContent["nav"]["nav-item-2"];

const nav3 = document.querySelectorAll("a");
nav1[2].textContent = siteContent["nav"]["nav-item-3"];

const nav4 = document.querySelectorAll("a");
nav1[3].textContent = siteContent["nav"]["nav-item-4"];

const nav5 = document.querySelectorAll("a");
nav1[4].textContent = siteContent["nav"]["nav-item-5"];

const nav6 = document.querySelectorAll("a");
nav1[5].textContent = siteContent["nav"]["nav-item-6"];
//Dom is Awesome, button
const DomAw = document.querySelector("h1");
DomAw.textContent = siteContent["cta"]["h1"];

const DomButton = document.querySelector("button");
DomButton.textContent = siteContent["cta"]["button"];
// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update Image Src
const CodeImg = document.getElementById("cta-img");
CodeImg.setAttribute("src", siteContent["cta"]["img-src"]);

const MiddleImg = document.getElementById("middle-img");
MiddleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Top Section which inlcudes top section feats and about
const feats = document.querySelector("h4");
feats.textContent = siteContent["main-content"]["features-h4"];

const featsP = document.querySelector("p");
featsP.textContent = siteContent["main-content"]["features-content"];

const aboutS = document.querySelectorAll("h4");
aboutS[1].textContent = siteContent["main-content"]["about-h4"];

const aboutP = document.querySelectorAll("p");
aboutP[1].textContent = siteContent["main-content"]["about-content"];

// Bottom section which will contain services product & vision

const serviceS = document.querySelectorAll("h4");
serviceS[2].textContent = siteContent["main-content"]["services-h4"];

const serviceP = document.querySelectorAll("p");
serviceP[2].textContent = siteContent["main-content"]["services-content"];

const productS = document.querySelectorAll("h4");
productS[3].textContent = siteContent["main-content"]["product-h4"];

const productP = document.querySelectorAll("p");
productP[3].textContent = siteContent["main-content"]["product-content"];

const visionS = document.querySelectorAll("h4");
visionS[4].textContent = siteContent["main-content"]["vision-h4"];

const visionP = document.querySelectorAll("p");
visionP[4].textContent = siteContent["main-content"]["vision-content"];

// contact info

const contactS = document.querySelectorAll("h4");
contactS[5].textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll("p");
contactP[5].textContent = siteContent["contact"]["address"];

const phoneP = document.querySelectorAll("p");
phoneP[6].textContent = siteContent["contact"]["phone"];

const emailP = document.querySelectorAll("p");
emailP[7].textContent = siteContent["contact"]["email"];

// Footer

const FooterP = document.querySelectorAll("p");
FooterP[8].textContent = siteContent["footer"]["copyright"];
