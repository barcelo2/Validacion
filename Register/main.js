const form = document.getElementById("form");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const address = document.getElementById("address");
const province = document.getElementById("province");
const city = document.getElementById("city");
const zipCode = document.getElementById("zipCode");
const error = document.getElementById("error");
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
error.style.color = "orangered";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorMessages = [];
  if (mail.value === "" || mail.value === null) {
    errorMessages.push("Email is requiered.");
  }
  if (!filter.test(mail.value)) {
    errorMessages.push("Email must contain @.");
  }
  if (password.value === "") {
    errorMessages.push(
      "Enter a password. Minimum 1 capital letter, 1 number, 8 character"
    );
  }
  if (address.value === "") {
    errorMessages.push("Please introduce an address.");
  }
  if (province.value === "") {
    errorMessages.push("Select a province");
  }
  if (city.value === "") {
    errorMessages.push("Please introduce your city");
  }
  if (zipCode.value === "" || zipCode.value < 5) {
    errorMessages.push("Introduce your zipcode (5 digits)");
  }
  error.innerHTML = errorMessages.join(", ");
  return false;
});
