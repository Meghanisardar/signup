function signup() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let messege = document.getElementById("messege");
  if (email.value === "") {
    messege.innerHTML = "Please enter email ";
    messege.style.color = "red";
    email.focus();
  } else if (password.value === "") {
    messege.innerHTML = "Please enter password";
    messege.style.color = "red";
    password.focus();
  } else {
    let userdata = {
      email: email.value,
      password: password.value,
    };
console.log(userdata)
    firebase
      .auth()
      .createUserWithEmailAndPassword(userdata.email, userdata.password)
      .then((resolve) => {
        messege.innerHTML = "Signup succsesfully ";
        messege.style.color = "green";
        messege.style.fontSize="20px";
        messege.style.fontWeight="bold";
        console.log(resolve.userdata);
      })
      .catch((error) => {
        messege.innerHTML = error.messege;
        messege.style.color = "red";
        messege.style.fontSize="20px";

      });
  }
}
function passbtn() {
  let password = document.getElementById("password");
  let passbtn=document.getElementById("showwbtn");
  if(password.type==="password"){
    password.type="text";
    passbtn.innerHTML="Hide"
  }else{
    password.type="password";
    passbtn.innerHTML="Show"
  }
}