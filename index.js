const form = document.getElementById("emailForm");
const input = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value) {
    input.setAttribute("aria-invalid", "true");
    errorMessage.textContent = "Please provide an email address";
    errorMessage.classList.remove("success");
    input.focus();
  } else if (!input.validity.valid) {
    input.setAttribute("aria-invalid", "true");
    errorMessage.textContent = "Please provide a valid email";
    errorMessage.classList.remove("success");
    input.focus();
  } else {
    input.setAttribute("aria-invalid", "false");
    errorMessage.textContent = "Thank you for subscribing!";
    errorMessage.classList.add("success");
    form.reset();
  }
});

input.addEventListener("input", () => {
  if (input.validity.valid && input.value) {
    input.setAttribute("aria-invalid", "false");
    errorMessage.textContent = "";
    errorMessage.classList.remove("success");
  }
});
