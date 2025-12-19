document.addEventListener("DOMContentLoaded", () => {

 
  const galleryImages = document.querySelectorAll(".photo-item img");

  if (galleryImages.length > 0) {
    
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.classList.remove("active");
      }
    });

    
    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        lightboxImg.src = image.src;
        lightbox.classList.add("active");
      });
    });
  }
});
