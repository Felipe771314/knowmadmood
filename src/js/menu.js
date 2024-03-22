document.addEventListener('DOMContentLoaded', function() {
    const sideContent = document.querySelector('.side-content');
    const toggleMenuButton = document.getElementById('toggleMenu');

    toggleMenuButton.addEventListener('click', function() {
        sideContent.classList.toggle('active');
    });
});
