document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Toggle icon (simple text change for now, could be SVG swap)
      if (navLinks.classList.contains('active')) {
        toggleBtn.innerHTML = '✕';
      } else {
        toggleBtn.innerHTML = '☰';
      }
    });
  });
  