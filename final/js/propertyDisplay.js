import { properties } from './propertyData.js'; // your data file

const propertyList = document.getElementById('property-list');

function createPropertyCard(property) {
  return `
    <article class="property-card" tabindex="0" aria-label="Property: ${property.title}">
      <img src="${property.image}" alt="${property.alt}" loading="lazy" width="400" height="300" />
      <h3>${property.title}</h3>
      <p><strong>Location:</strong> ${property.location}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
    </article>
  `;
}

function displayProperties() {
  propertyList.innerHTML = properties.map(createPropertyCard).join('');
}

document.addEventListener('DOMContentLoaded', displayProperties);
