import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markupGallery = galleryItems
  .map(
    (el) => `<div class="gallery__item">
    <a class="gallery__link" href=${el.original}>
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source=${el.original}
        alt=${el.description}
      />
    </a>
  </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markupGallery);

const galleryLink = document.querySelectorAll(".gallery__link");
galleryLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

console.log(galleryLink);
console.log(gallery);
console.log(galleryItems);

