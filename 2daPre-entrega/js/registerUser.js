const registerUser = document.querySelector("#registerForm");

registerUser.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const isUserRegistered = users.find((user) => user.name === name);
  const isEmailRegistered = users.find((user) => user.email === email);
  if (isUserRegistered && isEmailRegistered) {
    return alert("El usuario y Email esta registro");
  } else if (isEmailRegistered) {
    return alert("Email esta registro");
  }

  users.push({ name: name, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));
  //redireccion al login
  window.location.href = "../seccion/login.html";
});
