const form = document.getElementById("emailForm");
const input = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value || !input.validity.valid) {
    input.setAttribute("aria-invalid", "true");
    errorMessage.textContent = "Please provide a valid email";
    input.focus();
  } else {
    input.setAttribute("aria-invalid", "false");
    errorMessage.textContent = "";
    form.reset();
  }
});

input.addEventListener("input", () => {
  if (input.validity.valid && input.value) {
    input.setAttribute("aria-invalid", "false");
    errorMessage.textContent = "";
  }
});
