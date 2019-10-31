const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navigation = document.querySelectorAll('a')
navigation[0].textContent = "Services"
navigation[1].textContent = "Product"
navigation[2].textContent = "Vision"
navigation[3].textContent = "Features"
navigation[4].textContent = "About"
navigation[5].textContent = "Contact"

navigation[0].style.color = 'green';
navigation[1].style.color = 'green';
navigation[2].style.color = 'green';
navigation[3].style.color = 'green';
navigation[4].style.color = 'green';
navigation[5].style.color = 'green';

const team = document.createElement('a')
team.href = "#"
team.textContent = "Team"

const shop = document.createElement('a')
shop.href = "#"
shop.textContent = "Shop"

const navBar = document.querySelector("nav")
navBar.appendChild(team);
navBar.prepend(shop);
team.style.color = 'green';
shop.style.color = 'green';


const title = document.querySelector('h1')
title.textContent = "DOM Is Awesome"

const button = document.querySelector('button')
button.textContent = "Get Started"

const headerImg = document.getElementById('cta-img')
headerImg.src = "img/header-img.png"

const features = document.querySelectorAll('h4')
features[0].textContent = "Features"
features[1].textContent = "About"
features[2].textContent = "Services"
features[3].textContent = "Product"
features[4].textContent = "Vision"
features[5].textContent = "Contact"

const contentParagraph = document.getElementsByTagName('p');
contentParagraph[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
contentParagraph[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
contentParagraph[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
contentParagraph[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
contentParagraph[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
contentParagraph[5].textContent = "123 Way 456 Street Somewhere, USA"
contentParagraph[6].textContent = "1 (888) 888-8888"
contentParagraph[7].textContent = "sales@greatidea.io"
contentParagraph[8].textContent = "Copyright Great Idea! 2018"

const middleImg = document.getElementById('middle-img')
middleImg.src = "img/mid-page-accent.jpg"
