const inputEmail = document.getElementById("inputEmail1");
const inputPassword = document.getElementById("inputPassword1");
const form = document.getElementById("form");
const errors = document.getElementById("error");
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
errors.style.color = "orangered";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let errorMessages = [];
  if (inputEmail.value === "" || inputEmail.value == null) {
    errorMessages.push("Email field is requiered.");
  }
  if (!filter.test(inputEmail.value)) {
    errorMessages.push("Emailfield must contain @.");
  }
  if (inputPassword.value === "" || inputPassword.value == null) {
    errorMessages.push(
      "Enter a password. Minimum 1 capital letter, 1 number, 8 character"
    );
  }
  errors.innerHTML = errorMessages.join(", ");
  return false;
});
