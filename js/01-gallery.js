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

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target.nodeName)
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1200" height="800">`,
    { onShow: () => {}, onClose: () => {} }
  );
  // instance.show();

  window.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
      instance.close();
    }
  });

  // const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="1200" height="800">`);
  // instance.show();

  // window.addEventListener("keydown", function (e) {
  //   if (e.code === "Escape") {
  //     // console.log(e);
  //     instance.close();
  //     //  document.querySelector('div .modal').onClick = instance.close()
  //   }
  // });
});

// console.log(gallery);
// console.log(galleryItems);
