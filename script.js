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

/* boton seleccionable*/
document.getElementById('services').addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex].text;
  document.getElementById('selected-service-btn').innerText = selectedOption;
});




/* formulario*/

const frmEmail = document.getElementById('frm-Email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_40d0xtj'
const templateId = 'template_m5y4ttq'
const apikey = 'kFMQC0Xjce242RaTH'


function sendEmail(event) {
  event.preventDefault()
  emailjs.init(serviceId)

  emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
 .then( result => Swal.fire( 'Su mensaje se ha enviado correctamente.') )
 .catch( error => {
        Swal.fire({
        icon:  'error',
        title: 'Oops...',
        text: 'Algo salió mal, por favor intenta de nuevo.',

        });
});

 
}