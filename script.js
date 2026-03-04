// A single bootstrap point so all interactions stay in one place and are easy to trace.
document.addEventListener("DOMContentLoaded", () => {
  setupStickyHeader();
  setupMobileNav();
  setupHeroCarousel();
  setupHeroZoom();
  setupVersatileCarousel();
  setupFaqAccordion();
  setupForms();
});

// Shows the header when the user scrolls down past a threshold and hides it when scrolling back up.
function setupStickyHeader() {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav-links");
  if (!header) return;

  let lastScroll = 0;

  const handleScroll = () => {
    const current = window.scrollY || window.pageYOffset;

    // If the mobile menu is open while the user scrolls, close it so it does not float around.
    if (nav && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
    }

    if (current > 200 && current > lastScroll) {
      header.classList.add("is-visible");
    } else if (current < lastScroll) {
      header.classList.remove("is-visible");
    }

    lastScroll = current;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}

// Simple carousel logic for the hero gallery using the arrow buttons and thumbnails.
function setupHeroCarousel() {
  const mainImg = document.getElementById("hero-main-image");
  const thumbnails = Array.from(
    document.querySelectorAll(".hero-thumbnails .thumb")
  );
  const prevBtn = document.querySelector(".hero-arrow-left");
  const nextBtn = document.querySelector(".hero-arrow-right");

  if (!mainImg || !thumbnails.length || !prevBtn || !nextBtn) return;

  const images = thumbnails.map((btn) => btn.getAttribute("data-image"));
  let currentIndex = 0;

  const setActiveIndex = (index) => {
    if (!images[index]) return;
    currentIndex = index;
    mainImg.src = images[index];

    thumbnails.forEach((btn, i) => {
      if (i === currentIndex) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });
  };

  thumbnails.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      setActiveIndex(index);
    });
  });

  prevBtn.addEventListener("click", () => {
    const nextIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setActiveIndex(nextIndex);
  });

  nextBtn.addEventListener("click", () => {
    const nextIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setActiveIndex(nextIndex);
  });

  setActiveIndex(0);
}

// Handles the hamburger toggle on small screens so the header links can be opened and closed.
function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}

// Recreates the desktop-only zoom-on-hover effect for the main hero image.
function setupHeroZoom() {
  const img = document.getElementById("hero-main-image");
  const lens = document.getElementById("hero-zoom-lens");
  const preview = document.getElementById("hero-zoom-preview");

  if (!img || !lens || !preview) return;

  const canShowZoom = () => window.innerWidth >= 1024;

  const updateZoom = (event) => {
    if (!canShowZoom()) return;

    const rect = img.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    lens.style.left = `${event.clientX - 50}px`;
    lens.style.top = `${event.clientY - 50}px`;

    preview.style.backgroundImage = `url("${img.src}")`;
    preview.style.backgroundPosition = `${x}% ${y}%`;
  };

  img.addEventListener("mouseenter", (event) => {
    if (!canShowZoom()) return;
    lens.classList.add("is-visible");
    preview.classList.add("is-visible");
    updateZoom(event);
  });

  img.addEventListener("mousemove", (event) => {
    if (!canShowZoom()) return;
    updateZoom(event);
  });

  img.addEventListener("mouseleave", () => {
    lens.classList.remove("is-visible");
    preview.classList.remove("is-visible");
  });
}

// Simple horizontal carousel for the versatile applications section using prev/next buttons.
function setupVersatileCarousel() {
  const track = document.getElementById("versatile-track");
  const prevBtn = document.getElementById("versatile-prev");
  const nextBtn = document.getElementById("versatile-next");

  if (!track || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.children);
  let currentIndex = 0;

  const updatePosition = () => {
    const isDesktop = window.innerWidth >= 768;
    if (!slides.length) return;

    if (isDesktop) {
      const cardWidth = slides[0].getBoundingClientRect().width + 20; // 20px gap approximation
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const goToPrev = () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updatePosition();
  };

  const goToNext = () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updatePosition();
  };

  prevBtn.addEventListener("click", goToPrev);
  nextBtn.addEventListener("click", goToNext);
  window.addEventListener("resize", updatePosition);

  updatePosition();
}

// Handles opening and closing of FAQ items so that only one answer is visible at a time.
function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const toggle = item.querySelector(".faq-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((other) => {
        other.classList.remove("is-open");
        const btn = other.querySelector(".faq-toggle");
        if (btn) {
          btn.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        item.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// Keeps form behaviour inline with expectations: light validation and a simple acknowledgement.
function setupForms() {
  const catalogueForm = document.getElementById("catalogue-form");
  const contactForm = document.getElementById("contact-form");

  if (catalogueForm) {
    catalogueForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = catalogueForm.querySelector("input[name='catalogueEmail']");
      const email = emailInput && emailInput.value ? emailInput.value.trim() : "";

      if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thanks, we will email the catalogue shortly.");
      catalogueForm.reset();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thanks for reaching out. Our team will get back to you soon.");
      contactForm.reset();
    });
  }
}

