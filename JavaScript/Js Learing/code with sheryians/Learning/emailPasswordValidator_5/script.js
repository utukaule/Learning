let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  let isValid = true;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  console.log(email.value);
  console.log(password.value);
  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  if (!emailans) {
    document.querySelector("#emailError").textContent = "email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
  }
  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "Password is incorrect";
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Everything is Correct";
  }
});
