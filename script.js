var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('key');
if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', function () {
        skillsSection.classList.toggle('hide');
    });
}
else {
    console.error('Element not found');
}
