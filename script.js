function filterCourses(type) {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        course.style.display = 'block';
        if (type === 'cse' && !course.classList.contains('cse')) {
            course.style.display = 'none';
        }
        if (type === 'wdd' && !course.classList.contains('wdd')) {
            course.style.display = 'none';
        }
    });
}
