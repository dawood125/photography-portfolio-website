document.addEventListener("DOMContentLoaded", () => {
  
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      
      navLinks.classList.toggle("open");

      
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });

      
      hamburger.classList.toggle("toggle");
    });
  }

 
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
