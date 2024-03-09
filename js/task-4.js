const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload on form submission

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  // Trim input values
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  // Reset form after submission
  this.reset();
});
