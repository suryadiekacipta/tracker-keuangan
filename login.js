let email = document.getElementById("email");
let password = document.getElementById("password");
let check = document.getElementById("check");
let but1 = document.getElementById("log");
let but2 = document.getElementById("gg");
let wrong_tag = document.getElementById("wrong");
let text1 = document.querySelector(".h5-1");
let data_email_user = ["eka@gmail.com", "cipta@gmail.com", "surya@gmail.com"];
let data_password_user = ["123123", "456456", "789789"];

but1.addEventListener("click", () => {
  if (
    email.value == data_email_user[0] &&
    password.value == data_password_user[0]
  ) {
    console.log("berhasil");
    window.location.href = "main.html";
  } else if (
    email.value == data_email_user[1] &&
    password.value == data_password_user[1]
  ) {
    console.log("berhasil");
    window.location.href = "main.html";
  } else if (
    email.value == data_email_user[2] &&
    password.value == data_password_user[2]
  ) {
    console.log("berhasil");
    window.location.href = "main.html";
  } else {
    wrong_tag.textContent = "Email atau Password Salah!";
    wrong_tag.style.color = "red";
    wrong_tag.style.marginBottom = "5px";
    text1.style.marginBottom = "5px";
  }
});
