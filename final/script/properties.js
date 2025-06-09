document.addEventListener("DOMContentLoaded", () => {
  fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
      const properties = data.properties;
      const grid = document.querySelector(".property-grid");

      properties.forEach(property => {
        const card = document.createElement("div");
        card.className = "property-card";

        card.innerHTML = `
          <img src="${property.image}" alt="${property.title}">
          <div class="info">
            <h3>${property.title}</h3>
            <p><strong>${property.price}</strong></p>
            <p>${property.location}</p>
            <p>${property.description}</p>
          </div>
        `;

        grid.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading properties:", error);
    });
});