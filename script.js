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



// ==================== CERTIFICATS CAROUSEL IMPROVED ====================

  document.addEventListener("DOMContentLoaded", () => {
    $("#flipbook").turn({
      width: 700,
      height: 450,
      autoCenter: true,
      gradients: true,
      elevation: 50
    });
  });


