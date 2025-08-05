window.addEventListener('load', () => {
    alert("Selamat datang di Website Nada 👋🏻");
});
const karyaImages = document.querySelectorAll('.karya');
karyaImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
        img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });
});

const igButton = document.querySelector('button');
igButton.addEventListener('click', () => {
    igButton.style.backgroundColor = '#f7b2d9';
    igButton.innerText = 'Menuju Instagram...';
});

igButton.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    document.querySelector('.karya-container').scrollIntoView({ behavior: 'smooth' });
});

let header = document.querySelector('header');
let warna = ['navy', 'black'];
let index = 0;
setInterval(() => {
    header.style.backgroundColor = warna[index];
    index = (index + 1) % warna.length;
}, 3000);

const title = document.querySelector('h1');
setInterval(() => {
    title.style.opacity = title.style.opacity === '1' ? '0.5' : '1';
}, 1000);
const profil = document.querySelector('.profile');
profil.addEventListener('mouseenter', () => {
    profil.style.boxShadow = '0 0 15px #0f0b0dff';
});
profil.addEventListener('mouseleave', () => {
    profil.style.boxShadow = 'none';
});
