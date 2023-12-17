document.addEventListener('DOMContentLoaded', function() {
    const imageButton = document.getElementById('imageButton');
    const displayImage = document.getElementById('displayImage');
    const infoButton = document.getElementById('info');
    const displayInfo = document.getElementById('displayInfo');

    // Lägg till en klickhändelse för att visa bilden och infoButton
    imageButton.addEventListener('click', function() {
        displayImage.classList.toggle('hidden');
        infoButton.classList.remove('hidden');
    });

    // Lägg till en klickhändelse för att visa informationen
    infoButton.addEventListener('click', function() {
        displayInfo.classList.toggle('hidden');
    });
});