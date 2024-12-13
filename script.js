// Mailer
function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/movaobvb", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Cookie Banner
document.addEventListener("DOMContentLoaded", function () {
  var cookieBanner = document.getElementById("cookie-banner");
  var acceptCookiesButton = document.getElementById("accept-cookies");
  var declineCookiesButton = document.getElementById("decline-cookies");

  // Check if cookies have been accepted or declined
  if (
    localStorage.getItem("cookiesAccepted") !== "true" &&
    localStorage.getItem("cookiesDeclined") !== "true"
  ) {
    cookieBanner.style.display = "flex"; // or "block" based on your CSS
  } else {
    cookieBanner.style.display = "none"; // Hide the banner if already accepted or declined
  }

  // Set cookiesAccepted flag in localStorage and hide the banner
  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  // Set cookiesDeclined flag in localStorage and hide the banner
  declineCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesDeclined", "true");
    cookieBanner.style.display = "none";
    // Optionally: Redirect to a page or take action on decline
  });
});

// Automatisches Schließen der Navigation bei Klick auf einen Link (für Mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navCollapse = document.querySelector(".navbar-collapse");
    if (navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  });
});

// Navigation bei Scrollen ändern (Transparent zu Dunkel)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll-Animation für die About-Section
const aboutSection = document.querySelector("#about");
const aboutImage = document.querySelector(".about-image");

window.addEventListener("scroll", () => {
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionPos < windowHeight - 100) {
    aboutImage.classList.add("animate");
  }
});

// Flip-Karten Logik
document.querySelectorAll('.flip-card-btn').forEach(button => {
  button.addEventListener('click', () => {
    const projectCard = button.closest('.project-card');
    projectCard.classList.toggle('flip');
  });
});

