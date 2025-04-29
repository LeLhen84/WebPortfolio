// ------------------------------theme toggle------------------------------------

// Theme toggle function
const toggleBtn = document.getElementById('themeModeToggle');

// On load, check localStorage for orange theme preference
window.addEventListener("DOMContentLoaded", () => {
  const isOrangeTheme = localStorage.getItem("orangeTheme") === "true";

  if (isOrangeTheme) {
    document.body.classList.add("orange-theme");
    toggleBtn.textContent = "Blue Theme";
  } else {
    toggleBtn.textContent = "Orange Theme";
  }
});

// Toggle orange/blue theme and update localStorage
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("orange-theme");

  const isOrange = document.body.classList.contains("orange-theme");
  toggleBtn.textContent = isOrange ? "Blue Theme" : "Orange Theme";
  localStorage.setItem("orangeTheme", isOrange);
});

// -----------------------------------back to top-------------------------------

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// -----------------------------swowing image when clicking-----------------------------
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
  
// -----------------------------chnging text automaitcally-----------------------------

const textArray = [
  "Welcome to my Web Portfolio...",
  "I am John Ahlen S. Corpuz",
  "I am 21 Years Old",
  "I am an IT Student"
  
];

let index = 0;
let charIndex = 0;
const speed = 100; // typing speed
const element = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < textArray[index].length) {
    element.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(() => {
      element.textContent = "";
      charIndex = 0;
      index = (index + 1) % textArray.length;
      typeEffect();
    }, 1500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);


// -------------------------------------burger nav-----------------------------------

// Function to show nav without animation
function showNav() {
  navLinks.classList.remove('animated-hide');
  navLinks.classList.add('animated-show');
  navLinks.style.display = 'flex'; // Show nav immediately
  navLinks.style.opacity = 1; // Make sure it's fully opaque
  navLinks.style.transform = 'translateY(0)'; // Ensure it's in place without animation
  burger.style.display = 'none'; // Hide the burger
}

// Function to hide nav without animation
function hideNav() {
  navLinks.classList.remove('animated-show');
  navLinks.classList.add('animated-hide');
  navLinks.style.display = 'none'; // Hide nav immediately
  burger.style.display = 'block'; // Show the burger
}

// Toggle nav on burger click
burger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!navLinks.classList.contains('animated-show')) {
    showNav();
  }
});

// Hide nav on outside click
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    if (navLinks.classList.contains('animated-show')) {
      hideNav();
    }
  }
});

// Hide nav on scroll
window.addEventListener('scroll', () => {
  if (navLinks.classList.contains('animated-show')) {
    hideNav();
  }
});

// Hide nav and navigate after clicking a link (no animation)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent instant navigation
    const targetHref = link.getAttribute('href');

    // Hide nav immediately before navigating
    hideNav();

    // Navigate after hiding the nav
    setTimeout(() => {
      window.location.href = targetHref;
    }, 0); // Navigate immediately after nav is hidden
  });
});



  // -----------------------------------------hide show nav bar when scrolling--------------------------------------------
  let lastScrollY = window.scrollY;
  const nav = document.querySelector('.nav-container');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down → hide nav
      nav.classList.remove('animated-show');
      nav.classList.add('animated-hide');
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up → show nav
      nav.classList.remove('animated-hide');
      nav.classList.add('animated-show');
    }

    lastScrollY = currentScrollY;
  });

  // -------------------------------------------loading screen----------------------------------
  const bar = document.getElementById("loading-bar");
  const loadingScreen = document.getElementById("loading-screen");
  let width = 0;
  
  // Detect how the page was loaded
  const navigationType = performance.getEntriesByType("navigation")[0].type;
  
  // Only show loading screen on first load or refresh
  if (navigationType === "reload" || navigationType === "navigate") {
    document.body.classList.add("loading");
    loadingScreen.style.display = "flex";
    loadingScreen.style.opacity = "1";
  
    const simulateLoading = setInterval(() => {
      if (width >= 100) {
        clearInterval(simulateLoading);
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
          loadingScreen.style.display = "none";
          document.body.classList.remove("loading");
        }, 500);
      } else {
        width += Math.random() * 12;
        if (width > 100) width = 100;
        bar.style.width = width + "%";
      }
    }, 80);
  } else {
    // Fallback: hide loading screen
    loadingScreen.style.display = "none";
    document.body.classList.remove("loading");
  }
  
  // // Prevent loading screen on navbar clicks (optional if using anchors or SPA-like nav)
  // const navLinks = document.querySelectorAll("nav a");
  // navLinks.forEach(link => {
  //   link.addEventListener("click", () => {
  //     // Instantly hide loading screen if visible due to navigation
  //     loadingScreen.style.display = "none";
  //     document.body.classList.remove("loading");
  //   });
  // });
  
  