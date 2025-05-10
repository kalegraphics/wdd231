const courses = [
    { code: "CSE 110", name: "Intro to CS", credits: 3, category: "CSE", completed: true },
    { code: "CSE 111", name: "Programming Logic", credits: 3, category: "CSE", completed: false },
    { code: "CSE 210", name: "OOP", credits: 3, category: "CSE", completed: false },
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, category: "WDD", completed: true },
    { code: "WDD 131", name: "Responsive Design", credits: 3, category: "WDD", completed: false },
    { code: "WDD 231", name: "Front-End Frameworks", credits: 3, category: "WDD", completed: false },
  ];
  
  const courseContainer = document.querySelector("#courseContainer");
  const creditTotal = document.querySelector("#creditTotal");
  
  function renderCourses(filteredCourses) {
    courseContainer.innerHTML = "";
  
    let totalCredits = 0;
  
    filteredCourses.forEach(course => {
      const card = document.createElement("div");
      card.className = course.completed ? "course-card completed" : "course-card";
      card.textContent = course.code;
      courseContainer.appendChild(card);
      totalCredits += course.credits;
    });
  
    if (creditTotal) {
      creditTotal.textContent = `Total Credits: ${totalCredits}`;
    }
  }
  
  function filterCourses(type) {
    if (type === "All") {
      renderCourses(courses);
    } else {
      const filtered = courses.filter(course => course.category === type);
      renderCourses(filtered);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderCourses(courses);
  
    document.querySelector("#btnAll").addEventListener("click", () => filterCourses("All"));
    document.querySelector("#btnCSE").addEventListener("click", () => filterCourses("CSE"));
    document.querySelector("#btnWDD").addEventListener("click", () => filterCourses("WDD"));
  });
  