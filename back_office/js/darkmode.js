const themeToggle = document.querySelector(".theme-toggler");
const sunIcon = themeToggle.querySelector(".fa-sun");
const moonIcon = themeToggle.querySelector(".fa-moon");

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    sunIcon.classList.toggle('active');
    moonIcon.classList.toggle('active');
});
