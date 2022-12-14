// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line
  
const galleryListElem = document.querySelector('.gallery');
console.log(galleryListElem);

const listImageElement = createListImageElement(galleryItems);
function createListImageElement(galleryItems) {

     return galleryItems.map(galleryItem => ` <a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a> `).join("");
}


galleryListElem.insertAdjacentHTML("beforeend", listImageElement)

 let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    })

console.log(galleryItems);
