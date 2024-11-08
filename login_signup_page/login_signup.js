let signup = document.querySelector(".signup2");
let login = document.querySelector(".login2");
let slider = document.querySelector(".slider2");
let formSection = document.querySelector(".formSection2");

signup.addEventListener("click", () => {
    slider.classList.add("moveSlider2");
    formSection.classList.add("formSectionMove2");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveSlider2");
    formSection.classList.remove("formSectionMove2");
});
