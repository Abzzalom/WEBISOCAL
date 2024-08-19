window.addEventListener('resize', adjustBannerHeight);

function adjustBannerHeight() {
    const bannerImage = document.getElementById('banner-image');
    const bannerContainer = document.querySelector('.banner-container');
    const aspectRatio = bannerImage.naturalWidth / bannerImage.naturalHeight;
    bannerContainer.style.height = `${bannerContainer.offsetWidth / aspectRatio}px`;
}





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
