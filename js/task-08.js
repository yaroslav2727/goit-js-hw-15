const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const formEl = e.currentTarget;
  if (!formEl.elements.email.value || !formEl.elements.password.value) {
    window.alert("All input fields must be filled in!");
    return;
  }
  const formObject = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
  };

  console.dir(formObject);
  formEl.reset();
}
