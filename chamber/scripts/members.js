async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Failed to fetch member data:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById('members-container');
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} Logo" />
      <h2>${member.name}</h2>
      <p><em>${member.tagline}</em></p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    `;

    container.appendChild(card);
  });
}

function setView(view) {
  const container = document.getElementById('members-container');
  container.className = view === 'grid' ? 'grid-view' : 'list-view';
}

fetchMembers();

// Footer dynamic content
document.addEventListener("DOMContentLoaded", function () {
  // Set current year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Set last modified date
  const modifiedSpan = document.getElementById("lastModified");
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
});



