document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

$(document).ready(function() {
    lc_lightbox('#lcl_elems_wrapper a', {
        wrap_class: 'lcl_fade_oc', // Optional: lightbox effect class
        gallery : true,           // Enable gallery mode
        thumb_attr: 'data-lcl-thumb' // Attribute for thumbnails
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Check if the user has visited before
    if (!sessionStorage.getItem("welcomeShown")) {
      showModal(); // Show the modal if not visited
      sessionStorage.setItem("welcomeShown", "true"); // Set a flag
    }
  });
  
  function showModal() {
    const modal = document.getElementById("welcome-modal");
    modal.style.display = "flex"; // Display the modal
  
    // Attach audio playback to modal interaction
    const modalContent = modal.querySelector(".modal-content");
    modalContent.addEventListener("click", playWelcomeAudio);
  }
  
  function closeModal() {
    const modal = document.getElementById("welcome-modal");
    modal.style.display = "none"; // Hide the modal
  }
  
  function playWelcomeAudio() {
    const audio = document.getElementById("welcomeAudio");
    audio.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });
  }