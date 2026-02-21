let loginButton = document.querySelector("#login-btn");
let int = document.querySelectorAll(".input");
loginButton.addEventListener("click", (e) => {
  let number = int[0].value;
  let pass = int[1].value;

  // Validation call
  ValidationForm(number, pass);
});

// Validation Function
function ValidationForm(number, password) {
  let errorNumber = document.querySelector("#errorNumber");
  let errorPassword = document.querySelector("#errorPassword");
  if (number.length < 11) {
    errorNumber.classList.remove("hidden");
  } else if (number != "01646267167") {
    errorNumber.textContent = "Enter Valid Number.";
    errorNumber.classList.remove("hidden");
  } else if (password.length < 4) {
    errorPassword.classList.remove("hidden");
  } else if (password != "1122") {
    errorPassword.textContent = "Enter valid password";
    errorPassword.classList.remove("hidden");
  } else {
    window.location.href = "Home.html";
  }
}

export default setBalance;
