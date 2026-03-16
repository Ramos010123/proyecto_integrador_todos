document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const navLinks = nav.querySelectorAll("a");
  const sections = document.querySelectorAll("main section[id]");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });

  const observerOptions = {
    threshold: 0.35,
    rootMargin: "-80px 0px -35% 0px"
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const currentId = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});