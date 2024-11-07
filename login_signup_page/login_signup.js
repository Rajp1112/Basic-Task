let signup = document.querySelector(".signup2");
let login = document.querySelector(".login2");
let slider = document.querySelector(".slider2");
let formSection = document.querySelector(".form-section2");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider2");
    formSection.classList.add("form-section-move2");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider2");
    formSection.classList.remove("form-section-move2");
});
