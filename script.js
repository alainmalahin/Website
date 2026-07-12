document.addEventListener("DOMContentLoaded", () => {

    const entranceVideo = document.getElementById("entrance-video");
    const hero = document.getElementById("hero");
    const soundToggle = document.getElementById("sound-toggle");

    if (!entranceVideo || !hero) return;

    entranceVideo.addEventListener("timeupdate", () => {

        if (entranceVideo.currentTime >= 5) {
            hero.classList.add("show");
        }

    });

    if (soundToggle) {

        soundToggle.addEventListener("click", () => {

            entranceVideo.muted = !entranceVideo.muted;

            soundToggle.textContent =
                entranceVideo.muted ? "SOUND ON" : "SOUND OFF";

        });

    }

});