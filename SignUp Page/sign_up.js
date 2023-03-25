const sign_button = document.querySelector(".sign-up");

const f1 = () => {
  var firstName = document.querySelector("#f-name").value;
  window.localStorage.setItem("nom", firstName);
  window.location = "/Confirm Page/confirm_register.html";
};

sign_button.addEventListener("click", f1);
