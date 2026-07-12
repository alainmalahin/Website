document.addEventListener("DOMContentLoaded", () => {

    const entranceVideo = document.getElementById("entrance-video");
    const hero = document.getElementById("hero");

    if (!entranceVideo || !hero) return;

    entranceVideo.addEventListener("timeupdate", () => {

        if (entranceVideo.currentTime >= 5) {
            hero.classList.add("show");
        }

    });

});