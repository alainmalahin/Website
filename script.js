document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector("button");

    if(button){

        button.addEventListener("click", () => {

            document.body.classList.add("fade-out");

            setTimeout(() => {

                const destino = document.getElementById("origins");

                if(destino){
                    destino.scrollIntoView({
                        behavior:"smooth"
                    });

                    document.body.classList.remove("fade-out");
                }

            },1200);

        });

    }

});
const musicBtn = document.getElementById("music-toggle");
const ambientAudio = document.getElementById("ambient-audio");

if (musicBtn && ambientAudio) {

    musicBtn.addEventListener("click", () => {

        if (ambientAudio.paused) {

            ambientAudio.volume = 0.35;
            ambientAudio.play();

            musicBtn.innerHTML = "🔇 Silenciar";

        } else {

            ambientAudio.pause();

            musicBtn.innerHTML = "🔊 Música";

        }

    });

}