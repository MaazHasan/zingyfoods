function toggleResetPswd(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle(); // display:block or none
  $("#logreg-forms .form-reset").toggle(); // display:block or none
}

function toggleSignUp(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle(); // display:block or none
  $("#logreg-forms .form-signup").toggle(); // display:block or none
}

function handleSubmit(e) {
  e.preventDefault();
  const EMAIL = "admin@zingyfoods.com";
  const PASSWORD = "admin";
  const email = $("#inputEmail").val();
  const password = $("#inputPassword").val();
  if (email === EMAIL && password === PASSWORD) {
    // window.location = "payment";
    // window.location = "login";
    return true;
  } else {
    return false;
  }
}

$(() => {
  // Login Register Form
  $("#logreg-forms #forgot_pswd").click(toggleResetPswd);
  $("#logreg-forms #cancel_reset").click(toggleResetPswd);
  $("#logreg-forms #btn-signup").click(toggleSignUp);
  $("#logreg-forms #cancel_signup").click(toggleSignUp);
});
