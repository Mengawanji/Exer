const formEnter = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const emailErrorInput = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordErrorInput = document.getElementById("passwordError");


formEnter.addEventListener("submit", function(e){
    e.preventDefault();

    let isValid = true;
         emailErrorInput.textContent = "";
         passwordErrorInput.textContent = "";

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailErrorInput.textContent = "Enter a valid email";
        isValid = false;
    }

    if (!passwordValue || passwordValue.length < 6) {
        passwordErrorInput.textContent = "Enter a valid password";
        isValid = false;
    }
    if (isValid) {
        alert("Login Successful");
    }

});