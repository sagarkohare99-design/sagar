// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple search placeholder (expand with real API)
document.getElementById('search-input').addEventListener('input', function() {
    console.log('Searching for: ' + this.value);
});