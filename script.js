<script>
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close-button");

    openModal.addEventListener("click", () => modal.classList.add("show"));
    closeModal.addEventListener("click", () => modal.classList.remove("show"));
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });

    // Animation au scroll
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  });
</script>

document.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax").forEach((el) => {
      const speed = el.dataset.speed;
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
  });
  



