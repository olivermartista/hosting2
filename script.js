// Ejemplo de datos de imágenes
const images = [
  { category: 'oleo', src: 'oleo1.jpg' },
  { category: 'oleo', src: 'oleo2.jpg' },
  { category: 'acrilica', src: 'acrilica1.jpg' },
  { category: 'acrilica', src: 'acrilica2.jpg' },
  // Agrega más imágenes y categorías según tus necesidades
];

//Función para generar las imágenes en la galería
function generateGallery() {
  const galleryContainer = document.getElementById('gallery');

  images.forEach(image => {
    const categoryContainer = document.querySelector('category[data-category="${image.category}"]');
    const imageElement = document.createElement('img');
    imageElement.src = image.src;
    categoryContainer.querySelector('.image-container').appendChild(imageElement);    
  });        
}


// Llama a la función para generar la galería al cargar la página
window.addEventListener('load' , generateGallery);
