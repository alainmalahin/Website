document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // ELEMENTOS
  // ==========================
  const enterBtn = document.querySelector(".enter-btn");
  const portal = document.querySelector(".portal");
  const overlay = document.querySelector(".transition-overlay");
  const musicBtn = document.getElementById("music-toggle");
  const music = document.getElementById("ambient-audio");

  // ==========================
  // MÚSICA
  // ==========================
  if (musicBtn && music) {

    music.volume = 0.35;

    musicBtn.addEventListener("click", () => {

      if (music.paused) {

        music.play();
        musicBtn.textContent = "🔊 MUSIC";

      } else {

        music.pause();
        musicBtn.textContent = "🔇 MUTE";

      }

    });

  }

  // ==========================
  // PARTÍCULAS DORADAS
  // ==========================
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  canvas.style.position = "fixed";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "1";

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);

  const particles = [];

  for (let i = 0; i < 80; i++) {

    particles.push({

      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,

      r: Math.random() * 2 + 1,

      dx: (Math.random() - 0.5) * 0.3,

      dy: Math.random() * 0.6 + 0.2

    });

  }
  function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

      ctx.beginPath();

      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(212,175,55,0.8)";

      ctx.fill();

      p.y += p.dy;
      p.x += p.dx;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;

    });

    requestAnimationFrame(animateParticles);

  }



  // ==========================
  // EFECTO AL PULSAR ENTER
  // ==========================
  if (enterBtn) {

    enterBtn.addEventListener("click", (e) => {

      e.preventDefault();

      if (portal) {
        portal.classList.add("portal-open");
      }

      if (overlay) {
        overlay.classList.add("active");
      }

      setTimeout(() => {
        window.location.href = "origenes.html";
      }, 1800);

    });

  }
});