/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2000,
//   delay: 200,
//   //     reset: true
// });
const sr = ScrollReveal();

sr.reveal(".home__title", {
  origin: "bottom",
  distance: "50px",
  duration: 2000,
  delay: 500,
  reset: true,
});
const greetings = document.querySelectorAll(".greetings");

// Loop through each greeting and apply staggered delays
greetings.forEach((element, index) => {
  element.style.animationDelay = `${index * 3}s`; // Adjust timing if needed
});

/**
 * loading
 */
document.addEventListener("DOMContentLoaded", function () {
  // Your existing JavaScript code

  // Show the loading spinner
  function showLoadingSpinner() {
    document.getElementById("loadingSpinner").style.display = "block";
  }

  // Hide the loading spinner
  function hideLoadingSpinner() {
    document.getElementById("loadingSpinner").style.display = "none";
  }

  // Example: Show loading spinner before making an AJAX request
  showLoadingSpinner();

  // Simulate an asynchronous task (e.g., AJAX request) with setTimeout
  setTimeout(function () {
    // Your existing code that runs after the task is complete

    // Hide the loading spinner after the task is complete
    hideLoadingSpinner();
  }, 2000); // Adjust the time based on your task duration
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
