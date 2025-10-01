// ==================== TYPING EFFECT ====================
(function(){
  const el = document.getElementById('typed');
  const text = "Hi, I'm Sahra Ourari";
  const speed = 80;
  let i = 0;
  function type() {
    if (!el) return;
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  window.addEventListener('DOMContentLoaded', () => setTimeout(type, 350));
})();

// ==================== HERO IMAGE ZOOM ====================
(function(){
  const img = document.getElementById('heroPhoto');
  if (!img) return;
  function addZoom() { img.classList.add('zoom-in'); }
  if (img.complete) addZoom(); else img.addEventListener('load', addZoom);
})();

// ==================== PETALS ANIMATION ====================
(function(){
  const container = document.querySelector('.petal-container');
  if (!container) return;
  const isMobile = window.innerWidth <= 600;
  const petalsCount = isMobile ? 6 : 12;
  const emojiList = ['🌸','✿','🌺','❀'];
  for (let i=0; i < petalsCount; i++) { createPetal(i); }
  function createPetal(i){
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerText = emojiList[Math.floor(Math.random()*emojiList.length)];
    petal.style.left = (Math.random()*100)+'vw';
    petal.style.fontSize = (18 + Math.random()*30)+'px';
    const dur = 6 + Math.random()*8;
    const delay = Math.random()*5;
    petal.style.animationDuration = dur+'s';
    petal.style.animationDelay = delay+'s';
    container.appendChild(petal);
    petal.addEventListener('animationend', () => { petal.remove(); setTimeout(()=>createPetal(i),300); });
  }
})();

// ==================== SCROLL REVEAL ====================
(function(){
  const sections = document.querySelectorAll("section");
  function reveal() {
    const trigger = window.innerHeight / 1.2;
    sections.forEach(sec => { if (sec.getBoundingClientRect().top < trigger) sec.classList.add("visible"); });
  }
  window.addEventListener("scroll", reveal);
  window.addEventListener("DOMContentLoaded", reveal);
})();

// ==================== DARK MODE TOGGLE ====================
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector(".dark-toggle i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
}

// ==================== BACK TO TOP ====================
const backToTop = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==================== MULTI-WORD TYPING EFFECT ====================
const typedText = document.getElementById("typed");
const words = ["Data Analyst","Business Intelligence","Data Engineering","Machine Learning Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];
  
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();


// ==================== CERTIFICATES 3D BOOK ==================== 
// ==================== GALAXY AVEC EXPLOSION D'ÉTOILES ====================
function openGalaxy() {
  const sphere = document.querySelector(".galaxy-sphere");
  const constellation = document.getElementById("constellation");

  // Création du conteneur d’étoiles
  const starContainer = document.createElement("div");
  starContainer.classList.add("star-explosion");
  document.body.appendChild(starContainer);

  // Position du centre de la sphère
  const rect = sphere.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2 + window.scrollY;

  // Générer plusieurs étoiles
  for (let i = 0; i < 25; i++) {
    const star = document.createElement("span");
    star.classList.add("star");

    // Position initiale = centre
    star.style.left = centerX + "px";
    star.style.top = centerY + "px";
    starContainer.appendChild(star);

    // Direction aléatoire
    const angle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * 120;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    // Animation des étoiles
    star.animate([
      { transform: `translate(0, 0) scale(1)`, opacity: 1 },
      { transform: `translate(${x}px, ${y}px) scale(0.3)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 500,
      easing: "ease-out",
      fill: "forwards"
    });
  }

  // Supprimer les étoiles après animation + montrer la constellation
  setTimeout(() => {
    starContainer.remove();

    // Disparition de la sphère
    sphere.style.opacity = "0";
    sphere.style.transform = "scale(0.5)";
    setTimeout(() => {
      sphere.style.display = "none";
      // Apparition de la constellation
      constellation.style.display = "flex";
      constellation.classList.add("show");
    }, 600);
  }, 1500);
}



