var iconImages = document.querySelectorAll('.icon img');

iconImages.forEach(function (iconImage) {
    iconImage.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    });

    iconImage.addEventListener('mouseout', function () {
        this.style.transform = ''; // Reset to the default scale
    });
});