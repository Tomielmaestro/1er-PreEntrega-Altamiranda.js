const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const user = JSON.parse(localStorage.getItem("users")) || [];
  const valiUser = user.find(
    (user) => user.email === email && user.password === password
  );
  if (!valiUser) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Passwords y/o Email incorrectos!",
    });
  }
  localStorage.setItem("login-success", JSON.stringify(valiUser));
  window.location.href = "../index.html";
});
