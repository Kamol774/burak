console.log("Signup frontend javascript file");


$(function () { });

function validateSignupForm() { // ejs -> form dagi onsubmit bilan bog'lanadi
  const memberNick = $(".member-nick").val()
  const memberPhone = $(".member-phone").val()
  const memberPassword = $(".member-password").val()
  const confirmPassword = $(".confirm-password").val()

  if (memberNick === "" || memberPhone === "" || memberPassword === "" || confirmPassword === "") {
    alert("Please insert all required inputs");
    return false
  }
  if (memberPassword !== confirmPassword) {
    alert("Password differs, please check!");
    return false
  }
  return false;
}