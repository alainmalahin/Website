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