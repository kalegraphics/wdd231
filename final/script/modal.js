const modal = document.getElementById('property-modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

export function openModal(property) {
  modalBody.innerHTML = `
    <h2>${property.title}</h2>
    <img src="${property.image}" alt="${property.title}" loading="lazy">
    <p><strong>Price:</strong> ${property.price}</p>
    <p><strong>Location:</strong> ${property.location}</p>
    <p>${property.description}</p>
  `;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
