const toggleButton = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("expanded");
});






// Set the timestamp input value when page loads
window.addEventListener('DOMContentLoaded', () => {
  const timestampInput = document.getElementById('timestamp');
  if (timestampInput) {
    timestampInput.value = new Date().toISOString();
  }

  // Add click event listeners to all links that open modals
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('href').substring(1);
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.showModal();
      }
    });
  });
});
