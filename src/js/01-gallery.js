// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `	
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
      />
   </a>
   </li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
