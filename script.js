// scroll button
function scrollToSection() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}

// scroll reveal
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".reveal");
  
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// character follow mouse (biar hidup)
document.addEventListener("mousemove", (e) => {
  const char = document.querySelector(".character");
  
  if (!char) return;
  
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  
  char.style.transform = `translateX(-50%) translate(${x}px, 0)`;
});
