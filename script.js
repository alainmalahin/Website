// ===== ALAIN MALAHIN =====

document.addEventListener("DOMContentLoaded", () => {

    const enter = document.querySelector(".enter");

    if (enter) {

        enter.addEventListener("click", function(e){

            e.preventDefault();

            document.querySelector("#origins").scrollIntoView({

                behavior:"smooth"

            });

        });

    }

});