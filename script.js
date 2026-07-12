document.addEventListener("DOMContentLoaded", () => {

    const entranceVideo = document.getElementById("entrance-video");
    const hero = document.getElementById("hero");

    if (!entranceVideo || !hero) return;

    entranceVideo.addEventListener("timeupdate", () => {

        if (entranceVideo.currentTime >= 1.2) {
            hero.classList.add("show");
        }

    });

});