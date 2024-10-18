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

/* chatbot*/
function toggleChat() {
  var chatBox = document.getElementById('chatBox');
  if (chatBox.style.display === 'none' || chatBox.style.display === '') {
      chatBox.style.display = 'flex';
  } else {
      chatBox.style.display = 'none';
  }
}


/*COMPARTIR POR REDES SOCIALES */
function openPopup(url) {
  try {
    const popup = window.open(url, '_blank', 'width=580,height=520');
    if (!popup) alert('Permite las ventanas emergentes para compartir.');
  } catch (error) {
    console.error('Error al abrir la ventana emergente:', error);
  }
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  openPopup(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('¡CONOCE A NUESTRA FAMILIA ISOCAL!');
  openPopup(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
}

