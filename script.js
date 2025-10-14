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
let galaxyOpen = false;

function toggleGalaxy() {
  const sphere = document.querySelector(".moon-magic");
  const constellation = document.getElementById("constellation");

  if (!galaxyOpen) {
    galaxyOpen = true;

    const starContainer = document.createElement("div");
    starContainer.classList.add("star-explosion");
    document.body.appendChild(starContainer);

    for (let i = 0; i < 40; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      const rect = sphere.getBoundingClientRect();
      star.style.left = rect.left + rect.width / 2 + "px";
      star.style.top = rect.top + rect.height / 2 + "px";
      starContainer.appendChild(star);

      const angle = Math.random() * 2 * Math.PI;
      const distance = 100 + Math.random() * 200;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      star.animate(
        [
          { transform: `translate(0, 0) scale(1)`, opacity: 1 },
          { transform: `translate(${x}px, ${y}px) scale(0.2)`, opacity: 0 }
        ],
        {
          duration: 1200 + Math.random() * 400,
          easing: "ease-out",
          fill: "forwards"
        }
      );
    }

    setTimeout(() => {
      starContainer.remove();
      sphere.style.opacity = "0";
      sphere.style.transform = "scale(0.5)";
      setTimeout(() => {
        sphere.style.display = "none";
        constellation.style.display = "flex";
        setTimeout(() => {
          constellation.classList.add("show");
        }, 50);
      }, 400);
    }, 1000);

  } else {
    galaxyOpen = false;
    constellation.classList.remove("show");
    setTimeout(() => {
      constellation.style.display = "none";
      sphere.style.display = "flex";
      setTimeout(() => {
        sphere.style.opacity = "1";
        sphere.style.transform = "scale(1)";
      }, 50);
    }, 400);
  }

  // 🌕 Lecture du son magique lors du clic sur la lune
const audio = document.getElementById('felicitation-audio');
if (audio && !audio.dataset.played) {
  audio.currentTime = 0;
  audio.play().catch(err => console.log('Lecture audio bloquée :', err));
  audio.dataset.played = "true"; // 🔁 empêche qu'il rejoue à chaque clic
}

}


// ==================== AUTO-FERMETURE SUR SCROLL ====================
window.addEventListener("scroll", () => {
  const certificatesSection = document.getElementById("certificates");
  const rect = certificatesSection.getBoundingClientRect();

  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (!isVisible && galaxyOpen) {
    galaxyOpen = false;

    const constellation = document.getElementById("constellation");
    const sphere = document.querySelector(".moon-magic");

    constellation.classList.remove("show");
    setTimeout(() => {
      constellation.style.display = "none";
      sphere.style.display = "flex";
      setTimeout(() => {
        sphere.style.opacity = "1";
        sphere.style.transform = "scale(1)";
      }, 50);
    }, 400);
  }
});


// ==================== NAVBAR SMOOTH SCROLL WITH OFFSET ====================
(function() {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;

  document.querySelectorAll(".navbar a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        const targetPosition = target.offsetTop - navbarHeight + 5; 
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
})();


// ==================== COULEUR MAGIQUE SELON L'HEURE 🌙 ====================
function updateMoonColor() {
  const moon = document.querySelector(".moon-magic");
  const hour = new Date().getHours();

  if (!moon) return;

  if (hour >= 6 && hour < 12) {
    moon.style.background = "radial-gradient(circle at 30% 30%, #fff7fb, #f9d4e4 60%, #f3b8ca 90%)";
  } else if (hour >= 12 && hour < 18) {
    moon.style.background = "radial-gradient(circle at 30% 30%, #ffffff, #f2d6e4 60%, #e2b3c5 90%)";
  } else if (hour >= 18 && hour < 21) {
    moon.style.background = "radial-gradient(circle at 30% 30%, #fff3e1, #f7c7c0 60%, #e69aa9 90%)";
  } else {
    moon.style.background = "radial-gradient(circle at 30% 30%, #f8e9f2, #e2b3c9 60%, #b88aaa 90%)";
  }
}

updateMoonColor();
setInterval(updateMoonColor, 600000);


// ==================== BOUTON SON ====================
function toggleSound() {
  const audio = document.getElementById('felicitation-audio');
  const btn = document.getElementById('soundToggle');

  if (!audio) return;

  if (audio.muted) {
    audio.muted = false;
    btn.textContent = "🔊";
  } else {
    audio.muted = true;
    btn.textContent = "🔇";
  }
}



// ==================== SKILLS ANIMATION (hover / touch / click) ====================

// ==================== SKILLS ANIMATION (hover on PC / auto on mobile) ====================

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".skill-item");
  const isMobile = window.innerWidth <= 768;
  let animated = false;

  function animateCircle(item) {
    const percent = item.dataset.percent;
    const circle = item.querySelector(".progress");
    const text = item.querySelector(".percent");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.transition = "stroke-dashoffset 1.5s ease";
    circle.style.strokeDashoffset = offset;

    // Animation du texte
    let current = 0;
    const increment = () => {
      if (current < percent) {
        current++;
        text.textContent = current + "%";
        requestAnimationFrame(increment);
      } else {
        text.textContent = percent + "%";
      }
    };
    increment();
  }

  if (isMobile) {
    // 🪄 Sur mobile → quand la section devient visible
    const skillsSection = document.getElementById("skills");
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        circles.forEach(item => animateCircle(item));
      }
    }, { threshold: 0.4 });
    observer.observe(skillsSection);
  } else {
    // 🖱️ Sur PC → déclenchement au survol
    circles.forEach(item => {
      let done = false;
      item.addEventListener("mouseenter", () => {
        if (!done) {
          done = true;
          animateCircle(item);
        }
      });
    });
  }
});

