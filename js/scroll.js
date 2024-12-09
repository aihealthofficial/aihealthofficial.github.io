//SAME AS CRAZY.JS//
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Viewport as the root
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once animation triggers
      }
    });
  }, observerOptions);

  // Select all elements with the animate class
  const animatedElements = document.querySelectorAll(".animate");

  animatedElements.forEach(el => observer.observe(el));
});


//SMOOTH SCROLLING//
document.addEventListener("DOMContentLoaded", function () {
  // Select all anchor links with hashes
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section by its ID
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Use smooth scrolling
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
