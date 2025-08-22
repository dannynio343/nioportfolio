// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Highlight active menu item on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', ()
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.header');

  // Toggle mobile nav menu
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when clicking a nav link
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      }
    });
  });

  // Highlight nav link on scroll
  const sections = document.querySelectorAll('section[id]');

  function changeActiveNav() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 70; // Adjust for header height
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', () => {
    changeActiveNav();

    // Add subtle shadow on header when scrolled down
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 3px 10px rgba(0,0,0,0.12)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Smooth scroll behavior for all nav links
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      window.scrollTo({
        top: targetSection.offsetTop - 60, // header offset
        behavior: 'smooth'
      });
    });
  });
});
h1111
document.addEventListener('DOMContentLoaded', () => {
  const homeContent = document.querySelector('.home-content');
  homeContent.style.opacity = '1';
  homeContent.style.transform = 'translateY(0)';
});
abbbb
// Fade-in animations triggered on scroll for About section
document.addEventListener('DOMContentLoaded', () => {
  const aboutText = document.querySelector('.fade-in-left');
  const aboutImage = document.querySelector('.fade-in-right');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const textTop = aboutText.getBoundingClientRect().top;
    const imageTop = aboutImage.getBoundingClientRect().top;

    if (textTop < windowHeight * 0.85) {
      aboutText.style.animationPlayState = 'running';
    }
    if (imageTop < windowHeight * 0.85) {
      aboutImage.style.animationPlayState = 'running';
    }
  }

  aboutText.style.animationPlayState = 'paused';
  aboutImage.style.animationPlayState = 'paused';

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
porfolio 

galeryy
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery-grid');
  const images = gallery.querySelectorAll('img');
  const modal = document.getElementById('galleryModal');
  const modalImage = modal.querySelector('.modal-image');
  const btnClose = modal.querySelector('.modal-close');
  const btnNext = modal.querySelector('.modal-next');
  const btnPrev = modal.querySelector('.modal-prev');

  let currentIndex = 0;

  // Open modal with clicked image
  function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Show next image
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
  }

  // Show previous image
  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
  }

  // Click events on gallery images
  images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
    img.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        openModal(index);
      }
    });
  });

  // Modal buttons
  btnClose.addEventListener('click', closeModal);
  btnNext.addEventListener('click', showNext);
  btnPrev.addEventListener('click', showPrev);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Close modal when clicking outside image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});
testimonialll
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextTestimonial() {
    let nextIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }

  function prevTestimonial() {
    let prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prevIndex);
  }

  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);

  // Optional: auto slide every 8 seconds
  setInterval(nextTestimonial, 8000);

  // Initialize first testimonial
  showTestimonial(currentIndex);
});
contacttt
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageEl = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = "Please fill in all fields.";
      messageEl.style.color = "#e63946";
      return;
    }

    // Simulate successful submission
    messageEl.textContent = "Thank you! Your message has been sent.";
    messageEl.style.color = "#2a9d8f";

    form.reset();
    setTimeout(() => {
      messageEl.textContent = "";
    }, 4000);
  });
});
