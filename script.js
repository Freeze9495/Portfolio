/* === EFFET DE TEXTE MACHINE À ÉCRIRE === */
function animateName() {
  const text = "Raphaël Piechocki";
  const typingText = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();
}

/* === BASELINE ROTATIVE/ANIMÉE === */
function rotateBaseline() {
  const baselines = [
    "Développeur & UX Designer en évolution",
    "Créateur d’expériences digitales",
    "Passionné par l’innovation web"
  ];
  const el = document.getElementById("rotating-baseline");
  let idx = 0;
  el.textContent = baselines[0];
  setInterval(() => {
    el.style.opacity = 0;
    setTimeout(() => {
      idx = (idx + 1) % baselines.length;
      el.textContent = baselines[idx];
      el.style.opacity = 1;
    }, 300);
  }, 4000);
}

/* === INITIALISATION AU DOMContentLoaded === */
document.addEventListener("DOMContentLoaded", () => {
  animateName();
  rotateBaseline();

});




/* === PARTICULES === */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeParticles();
window.addEventListener('resize', resizeParticles);

const particles = Array.from({ length: 80 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.8 + 0.5,
  dx: (Math.random() - 0.5) * 0.3,
  dy: (Math.random() - 0.5) * 0.3
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* === TRAÎNÉE DORÉE SUBTILE (efface rapidement) === */
(function(){
  function initTrail(){
    const trailCanvas = document.getElementById('trail');
    if (!trailCanvas) return;
    const tctx = trailCanvas.getContext('2d');

    function resizeTrail() {
      trailCanvas.width = window.innerWidth;
      trailCanvas.height = window.innerHeight;
    }
    resizeTrail();
    window.addEventListener('resize', resizeTrail);

    let mouse = { x: -9999, y: -9999 };
    let last = { x: -9999, y: -9999 };
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
    });

    window.addEventListener('mouseleave', () => {
      isMoving = false;
    });

    window.addEventListener('touchstart', (e) => {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        isMoving = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isMoving = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    function drawTrail() {
      tctx.globalCompositeOperation = 'destination-out';
      tctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      tctx.fillRect(0, 0, trailCanvas.width, trailCanvas.height);

      tctx.globalCompositeOperation = 'lighter';

      last.x += (mouse.x - last.x) * 0.25;
      last.y += (mouse.y - last.y) * 0.25;

      if (isMoving) {
        tctx.beginPath();
        tctx.moveTo(last.x, last.y);
        tctx.lineTo(mouse.x, mouse.y);
        tctx.strokeStyle = 'rgba(212,175,55,0.8)';
        tctx.lineWidth = 2;
        tctx.lineCap = 'round';
        tctx.shadowBlur = 8;
        tctx.shadowColor = 'rgba(212,175,55,0.6)';

        tctx.stroke();
      }

      requestAnimationFrame(drawTrail);
    }

    drawTrail();
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initTrail);
  } else {
    initTrail();
  }
})();

/* === Marquee outils en boucle infinie + pause au survol === */
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('tools-track');
  if (!track) return;

  const clone = track.cloneNode(true);
  clone.id = '';
  [...clone.children].forEach(child => track.appendChild(child.cloneNode(true)));

  function updateDuration(){
    const totalWidth = Array.from(track.children).reduce((w, el) => w + el.getBoundingClientRect().width + 22, 0);
    const halfWidth = totalWidth / 2;
    const seconds = Math.max(10, halfWidth / 100);
    track.style.animationDuration = `${seconds}s`;
  }
  updateDuration();
  window.addEventListener('resize', () => {
    track.style.animation = 'none';
    requestAnimationFrame(() => {
      track.style.animation = '';
      updateDuration();
    });
  });

  track.addEventListener('mouseenter', () => track.classList.add('paused'));
  track.addEventListener('mouseleave', () => track.classList.remove('paused'));
  track.addEventListener('focusin', () => track.classList.add('paused'));
  track.addEventListener('focusout', () => track.classList.remove('paused'));
});

/* === Galerie projets générique === */
function initProjectGallery(id) {
  const wrapper = document.getElementById(id);
  if (!wrapper) return;
  const track = wrapper.querySelector('.project-track');
  const slides = Array.from(track.querySelectorAll('img'));
  const indicator = wrapper.parentElement.querySelector('.project-indicator');
  const bars = Array.from(indicator.querySelectorAll('.project-bar'));

  let index = 0;
  let lock = false;
  const lockDelay = 220;

  function clamp(i) {
    return Math.max(0, Math.min(i, slides.length - 1));
  }

  function update() {
    slides.forEach((img, i) => img.classList.toggle('is-active', i === index));
    bars.forEach((bar, i) => bar.classList.toggle('is-active', i === index));
  }

  wrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (lock) return;
    lock = true;
    index = clamp(index + (e.deltaY > 0 ? 1 : -1));
    update();
    setTimeout(() => lock = false, lockDelay);
  }, { passive: false });

  wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      index = clamp(index + 1);
      update();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      index = clamp(index - 1);
      update();
    }
  });

  let startY = null;
  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches[0]) startY = e.touches[0].clientY;
  }, { passive: true });

  wrapper.addEventListener('touchmove', (e) => {
    if (startY === null || lock) return;
    const dy = e.touches[0].clientY - startY;
    if (Math.abs(dy) > 40) {
      lock = true;
      index = clamp(index + (dy < 0 ? 1 : -1));
      update();
      setTimeout(() => { lock = false; startY = null; }, lockDelay);
    }
  }, { passive: true });

  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initProjectGallery('gallery-equilibio');
    initProjectGallery('gallery-night');
    initProjectGallery('gallery-romaine');
    initProjectGallery('gallery-kidpaddle');
    initProjectGallery('gallery-police');
  });
} else {
  initProjectGallery('gallery-equilibio');
  initProjectGallery('gallery-night');
  initProjectGallery('gallery-romaine');
  initProjectGallery('gallery-kidpaddle');
  initProjectGallery('gallery-police');
}
