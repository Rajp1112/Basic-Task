function showContent(type) {
    const loginContent = document.getElementById("loginContent");
    const signupContent = document.getElementById("signupContent");
    const backgroundSlide = document.getElementById("backgroundSlide");
    const buttons = document.getElementsByClassName("button");

    if (type === "signup") {
      signupContent.classList.add("active");
      loginContent.classList.remove("active");
      backgroundSlide.style.transform = "translateX(100%)";
    } else {
      loginContent.classList.add("active");
      signupContent.classList.remove("active");
      backgroundSlide.style.transform = "translateX(0)";
    }

}





