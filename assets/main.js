 // JS REFATORADO

 //THEMA

const toggleButton = document.getElementById("themeToggle");
const html = document.documentElement;

function updateIcon(isLight) {
  const iconName = isLight ? "sun" : "moon";
  toggleButton.innerHTML = `<i data-lucide="${iconName}"></i>`;
  lucide.createIcons();
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  html.classList.add("light");
  updateIcon(true);
  toggleButton.setAttribute("aria-pressed", "true");
} else {
  updateIcon(false);
}

toggleButton.addEventListener("click", () => {
  html.classList.toggle("light");

  const isLight = html.classList.contains("light");

  updateIcon(isLight);
  toggleButton.setAttribute("aria-pressed", isLight);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});




// ABOUT ME ANIMATION
 const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  });

  elements.forEach(el => observer.observe(el));

//BOTÃO HAMBURGUER
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});





