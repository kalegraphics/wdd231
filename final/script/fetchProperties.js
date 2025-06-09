import { openModal } from './modal.js';

const propertyList = document.getElementById('property-list');

async function loadProperties() {
  try {
    const response = await fetch('../data/properties.json');
    if (!response.ok) throw new Error('Network response was not ok');

    const properties = await response.json();

    properties.forEach((property, index) => {
      const card = document.createElement('div');
      card.classList.add('property-card');
      card.innerHTML = `
        <img src="${property.image}" alt="${property.title}" loading="lazy">
        <h3>${property.title}</h3>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Location:</strong> ${property.location}</p>
        <button class="details-button" data-index="${index}">View Details</button>
      `;
      propertyList.appendChild(card);
    });

    document.querySelectorAll('.details-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const idx = e.target.dataset.index;
        openModal(properties[idx]);
      });
    });

  } catch (error) {
    propertyList.innerHTML = `<p class="error">Failed to load properties. Please try again later.</p>`;
    console.error('Fetch error:', error);
  }
}

loadProperties();
