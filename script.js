let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let header = document.querySelector("header");
window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  /* Scroll Top Button */
  if (pos > 400) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

/* Slider */

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

document.querySelector('.prev').addEventListener('click', () => moveSlide(6));
document.querySelector('.prev2').addEventListener('click', () => moveSlide(1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
document.querySelector('.next2').addEventListener('click', () => moveSlide(+2));
document.querySelector('.next3').addEventListener('click', () => moveSlide(-5));

setInterval(() => {
    moveSlide(1);
}, 5000);

/* boton */
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}
