const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  emailError.textContent = "";
  passwordError.textContent = "";

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailError.textContent = "Please enter a valid email";
    isValid = false;
  }

  if (!passwordValue || passwordValue.length < 6) {
    passwordError.textContent = "Please enter a valid password";
    isValid = false;
  }

  if (isValid) {
    alert("Login Successful!!");
  }
});