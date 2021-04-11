const search = document.getElementById("search");
const searchForm = document.getElementById("searchForm");
const error = document.getElementById("error");

searchForm.addEventListener("submit", (e) => {
  let messages = [];

  if (search.value === "" || search.value == null) {
    messages.push("Please fill in the field");
  }
  if (search.value.length <= 3) {
    messages.push("The search query should be of more than 3 characters");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});
