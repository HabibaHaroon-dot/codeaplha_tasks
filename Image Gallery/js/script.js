// script.js

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const images = document.querySelectorAll(".gallery img"); // Corrected selector

  images.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Close the modal
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });
});
