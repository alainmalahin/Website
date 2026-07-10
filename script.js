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