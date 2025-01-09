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