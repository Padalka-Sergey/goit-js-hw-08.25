// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const listGalleryRef = document.querySelector('.some-element');
const markup = createGalleryItems(galleryItems);

listGalleryRef.addEventListener('click', openModalImageHandler);
listGalleryRef.innerHTML = markup;

function createGalleryItems(items) {
  return items
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href=${original}>
  <img
  class="gallery__image"
  src=${preview}
  alt=${description}
  />
  </a>
  </li>`
    )
    .join('');
}

function openModalImageHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  new SimpleLightbox('.some-element a', {
    // captions: true,
    // captionPosition: 'top',
    captionsData: 'alt',
    captionDelay: 250,
  });
}
