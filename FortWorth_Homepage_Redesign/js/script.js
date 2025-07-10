document.addEventListener("DOMContentLoaded", function () {
  // ===== Alert Banner Logic =====
  const alertBanner = document.getElementById("alertBanner");
  const dismissBtn = document.getElementById("dismissAlert");
  const header = document.querySelector(".top-header");

  if (dismissBtn && alertBanner && header) {
    dismissBtn.addEventListener("click", function () {
      alertBanner.style.display = "none";
      header.classList.remove("alert-visible");
      header.classList.add("header-padding-offset");

      const notice = document.createElement("div");
      notice.textContent = "Show Announcement Again";
      notice.className = "restore-alert";
      notice.style.cursor = "pointer";

      notice.addEventListener("click", function () {
        alertBanner.style.display = "flex";
        header.classList.add("alert-visible");
        notice.remove();
      });

      document.body.insertBefore(notice, document.body.firstChild);
    });
  }

  // ===== Hero Image Slider =====
  const slides = document.querySelectorAll("#imageSlider .slide");
  const headline = document.getElementById("heroHeadline");
  const heroBanner = document.getElementById("heroBanner"); // banner shown only on slide 2

  const headlines = [
    "Fort Worth: Where Tradition Meets Progress",        // Slide 1
    "Welcome to Fort Worth: Proudly Serving a Million",  // Slide 2
    "Your City, Your Services — Fort Worth at Work"      // Slide 3
  ];

  let currentSlide = 0;

  function showSlide(index) {
    // Update active slide
    slides.forEach((slide, i) => slide.classList.remove("active"));
    slides[index].classList.add("active");

    // Update hero headline
    if (headline) {
      headline.textContent = headlines[index];
    }

    // Show banner ONLY on slide 2
    if (heroBanner) {
      if (index === 1) {
        heroBanner.classList.add("show");
      } else {
        heroBanner.classList.remove("show");
      }
    }
  }

  function startSlider() {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4000);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    startSlider();
  }

  // ===== Mobile Navigation Toggle =====
  const navToggle = document.getElementById("navToggle");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && closeMenu && mobileMenu) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.add("show");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });

    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
        mobileMenu.classList.remove("show");
      }
    });
  }

  // ===== Back to Top Button =====
  window.addEventListener("scroll", function () {
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
      backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    }
  });
});
