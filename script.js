

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