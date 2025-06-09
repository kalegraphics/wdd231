// script/js-discovery.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#cards-container");

  fetch("data/discover.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
          <h2>${place.title}</h2>
          <figure>
            <img src="${place.image}" alt="${place.title}">
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn More</button>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading discover.json:", error);
      container.innerHTML = "<p>Unable to load discovery data.</p>";
    });

  // LocalStorage last visit logic
  const sidebarMessage = document.querySelector("#visitor-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (lastVisit) {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      sidebarMessage.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
      sidebarMessage.textContent = "You last visited 1 day ago.";
    } else {
      sidebarMessage.textContent = `You last visited ${diffDays} days ago.`;
    }
  } else {
    sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
  }

  localStorage.setItem("lastVisit", now);
});
