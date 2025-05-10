document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menuButton");
    const navMenu = document.querySelector("nav ul");
  
    if (menuButton && navMenu) {
      menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  });
  