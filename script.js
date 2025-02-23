var swiper = new Swiper(".mySwiper", {
    effect: "coverflow", // Use coverflow effect
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,  // Rotate the slides
        stretch: 0,   // No stretch
        depth: 100,  // Depth effect
        modifier: 1,
        slideShadows: true,
    },
    loop: true, // Enable looping
    autoplay: {   // Enable autoplay
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Make pagination clickable
    },
});