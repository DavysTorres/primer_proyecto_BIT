var backgrounds = document.querySelectorAll('.background');
var slider = document.querySelector('.slider-images');
var images = Array.from(slider.children);
let fondos = [
  'fondo-1',
  'fondo-2',
  'fondo-3',
  'fondo-4'
]
console.log(images);
let imagesIndex = 0;

let contenedorFondo = document.querySelector('.slider-main');

function updateSlider() {
  images.forEach(image => {
    image.classList.remove('active', 'previous', 'next', 'inactive');
  });
  images[imagesIndex].classList.add('active');
  if (imagesIndex - 1 >= 0) {
    images[imagesIndex - 1].classList.add('previous');
  } else {
    images[images.length - 1].classList.add('previous');
  }
  if (imagesIndex + 1 < images.length) {
    images[imagesIndex + 1].classList.add('next');
  } else {
    images[0].classList.add('next');
  }
  images.forEach((image, index) => {
    if (index !== imagesIndex && index !== (imagesIndex - 1 + images.length) % images.length && index !== (imagesIndex + 1) % images.length) {
      image.classList.add('inactive');
    }
  });

  backgrounds.forEach((background) => {
    background.style.opacity = 0;
  });

  if (images[imagesIndex].classList.contains('active')) {
    backgrounds[imagesIndex].style.opacity = 1;
  }
  contenedorFondo.className = `slider-main ${fondos[imagesIndex]}`
  imagesIndex = (imagesIndex + 1) % images.length;
}
updateSlider();
setInterval(updateSlider, 5000);

images[1].classList.add('next');
images[2].classList.add('inactive');
images[3].classList.add('previous');
images[0].classList.add('active');