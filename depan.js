const background = document.querySelector('.background');
const camera = document.querySelector('.camera');
const button = document.querySelector('.hidden-button');

camera.addEventListener('mouseover', () => {
    camera.classList.add('open-camera');
    button.classList.add('show-button');
});

camera.addEventListener('mouseout', () => {
    camera.classList.remove('open-camera');
    button.classList.remove('show-button');
});
document.addEventListener("DOMContentLoaded", function() {
    // Menangkap elemen tombol
    const button = document.querySelector('.hidden-button');

    // Menambahkan event listener untuk klik
    button.addEventListener('click', function() {
   window.location.href = 'main/mainmenu.html'; // Mengarahkan ke mainmenu.html
    });
});
