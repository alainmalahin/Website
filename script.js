document.addEventListener("DOMContentLoaded", () => {

  const entranceVideo = document.getElementById("entrance-video");
  const hero = document.getElementById("hero");
  const soundToggle = document.getElementById("sound-toggle");

  const languageButtons = document.querySelectorAll(".lang-btn");
  const translatedElements = document.querySelectorAll("[data-es][data-en]");

  const savedLanguage = localStorage.getItem("alainLanguage") || "es";

  function setLanguage(language) {

    const selectedLanguage = language === "en" ? "en" : "es";

    document.documentElement.lang = selectedLanguage;

    localStorage.setItem("alainLanguage", selectedLanguage);

    translatedElements.forEach((element) => {

      element.innerHTML = element.dataset[selectedLanguage];

    });

    languageButtons.forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang === selectedLanguage
      );

    });

    if (soundToggle) {

      if (entranceVideo && !entranceVideo.muted) {

        soundToggle.textContent =
          selectedLanguage === "es"
            ? "SILENCIO"
            : "SOUND OFF";

      } else {

        soundToggle.textContent =
          selectedLanguage === "es"
            ? "SONIDO"
            : "SOUND ON";

      }

    }

  }

  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

      setLanguage(button.dataset.lang);

    });

  });

  setLanguage(savedLanguage);

  if (entranceVideo && hero) {

    entranceVideo.addEventListener("timeupdate", () => {

      if (entranceVideo.currentTime >= 3) {

        hero.classList.add("show");

      }

    });

  }

  if (soundToggle && entranceVideo) {

    soundToggle.addEventListener("click", () => {

      entranceVideo.muted = !entranceVideo.muted;

      setLanguage(
        localStorage.getItem("alainLanguage") || "es"
      );

    });

  }

});