var verified_email = false;
var verified_pass = false;
var verified = false;
function emailCheck() {
  //   console.log("email verified");
  let email = document.getElementById("email");
  let div = document.querySelector("#email + div");
  let condition1 = email.value.includes("@");
  let condition2 = email.value.includes(".");
  if (email.value.length < 4 || !condition1 || !condition2) {
    verified_email = false;
    div.style.display = "block";
  } else {
    verified_email = true;
    div.style.display = "none";
  }
  verify();
}

function passCheck() {
  //   console.log("password verified");
  let pass = document.getElementById("password");
  let div = document.querySelector("#password + div");
  if (pass.value.length < 8) {
    verified_pass = false;
    div.style.display = "block";
  } else {
    verified_pass = true;
    div.style.display = "none";
  }
  verify();
}

function verify() {
  //   console.log(verified_email, verified_pass);
  let v = document.getElementById("verified");
  if (verified_email && verified_pass) {
    v.style.display = "block";
    verified = true;
  } else {
    v.style.display = "none";
    verified = false;
  }
}

let btn = document.getElementById("submit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  emailCheck();
  passCheck();
  if (verified) {
    let x = window.confirm("Do you want to submit ?");
    if (x) alert("successful signup!");
    else {
      //   let email = document.getElementById("email");
      //   let pass = document.getElementById("password");
      //   email.value = "";
      //   pass.value = "";
      window.location.reload();
    }
  }
});
