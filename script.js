const buttonEl = document.getElementById("btn");
const emailEl = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const successMessage = document.querySelector(".success-message");
const dismissBtn = document.getElementById("dismiss-btn");
const container = document.querySelector(".container");

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();

  const emailPatternn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailEl.value.trim() || !emailPatternn.test(emailEl.value)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    container.style.display = "none"; // Hide the subscription form
    successMessage.style.display = "flex"; // Show success message
  }
});
// Event listener for dismiss button
dismissBtn.addEventListener("click", function () {
  successMessage.style.display = "none"; // Hide success message
  container.style.display = "flex"; // Show subscription form
  emailEl.value = ""; // Clear the input field
});
