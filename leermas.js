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
  