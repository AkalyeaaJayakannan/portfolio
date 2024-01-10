// "use strict";
console.log("Hello from js!");

// 20F13287FADF9A1E102C9E7898D7A2D1281D
// smtp akalyeaa2019 pass

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const nameText = document.querySelector(".home-name");
const developerText = document.querySelector(".home-developer");
const homeImg = document.querySelector(".home-img");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  // sending the text and image to back
  nameText.classList.toggle("z-index-back-1");
  developerText.classList.toggle("z-index-back-1");
  homeImg.classList.toggle("z-index-back-2");
});

// remove open navigation stlye when a link is clicked
const navLinksContainer = document.querySelector(".main_nav_list");

navLinksContainer.addEventListener("click", function (e) {
  console.log(e);
  let targetEl = e.target;
  console.log(targetEl);
  // console.log(targetEl.classList.contains(''));
  const navClose = function () {
    headerEl.classList.toggle("nav-open");
    // sending the text and image to back
    nameText.classList.toggle("z-index-back-1");
    developerText.classList.toggle("z-index-back-1");
    homeImg.classList.toggle("z-index-back-2");
  };

  if (targetEl.classList.contains("main_nav_link")) navClose();

  if (targetEl.classList.contains("nav_cta")) navClose();
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHomeEl = document.querySelector(".section-home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    console.log(ent.isIntersecting);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-150px",
  }
);
obs.observe(sectionHomeEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        // rootMargin: "150px",
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

////////////////////////////////////////////////////////////////
// Contact form functionality

// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "akalyeaa2019@gmail.com",
//     Password: "Ak@lyeaa2k19",
//     To: "akalyeaa2019.com",
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }

// document
//   .querySelector(".btn-form_submit")
//   .addEventListener("onclick", function () {
//     console.log("Form submitted!");
//   });
