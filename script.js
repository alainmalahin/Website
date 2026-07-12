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



// ENTRADA CINEMATOGRÁFICA

const cinematicEntry = document.querySelector(".cinematic-entry");
const doorEnter = document.querySelector("#door-enter");

if (cinematicEntry && doorEnter) {

  doorEnter.addEventListener("click", () => {

    doorEnter.style.opacity = "0";
    doorEnter.style.pointerEvents = "none";

    cinematicEntry.classList.add("open");

    setTimeout(() => {
      cinematicEntry.classList.add("walk");
    }, 3000);

    setTimeout(() => {
      cinematicEntry.style.opacity = "0";
    }, 7000);

    setTimeout(() => {
      cinematicEntry.style.display = "none";
    }, 8500);

  });

}

});
// VIDEO DE ENTRADA

const entranceVideo = document.getElementById("entrance-video");
const videoEntry = document.getElementById("video-entry");
const hero = document.getElementById("hero");

if (entranceVideo && hero) {

    entranceVideo.addEventListener("ended", () => {

        entranceVideo.pause();

        hero.classList.add("show");

    });

}