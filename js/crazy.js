document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Viewport is the root
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  // Select all feature boxes
  const featureBoxes = document.querySelectorAll(".feature_box");

  featureBoxes.forEach(box => observer.observe(box));
});
