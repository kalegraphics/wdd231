// Set current year
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Set last modified date
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Last Update: ${document.lastModified}`;
}
