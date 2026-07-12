document.addEventListener("DOMContentLoaded", () => {

    const entranceVideo = document.getElementById("entrance-video");
    const hero = document.getElementById("hero");

    if (!entranceVideo || !hero) return;

    entranceVideo.addEventListener("ended", () => {
        hero.classList.add("show");
    });

});